import React, { createContext, useContext, useEffect, useState } from "react";

interface Cat {
    id: string;
    url: string;
    breeds?: Breed[];
}
interface Breed {
    id: string;
    name: string;
    description?: string
    temperament?: string;
    origin?: string;
}

interface FavoritesContextType {
    favorites: Cat[];
    addFavorite: (cat: Cat) => void;
    removeFavorite: (catID: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<Cat[]>([]);

    useEffect(() => {
        const savedFavorites = localStorage.getItem("favorites");
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (cat: Cat) => {
        if (!favorites.some((fav) => fav.id === cat.id)) {
            setFavorites((prev) => [...prev, cat]);
        }
    };

    const removeFavorite = (catID: string) => {
        setFavorites((prev) => prev.filter((cat) => cat.id !== catID));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites must be used within a FavoritesProvider");
    }
    return context;
};