interface Cat {
    id: string;
    url: string;
    breeds?: Breed[];
}

interface Breed {
    id: string;
    name: string;
    description?: string;
    temperament?: string;
    origin?: string;
}

export const getFavorites = (): Cat[] => {
    const savedFavorites = localStorage.getItem("favorites");
    if (!savedFavorites) {
        return [];
    }
    const favorites = JSON.parse(savedFavorites);
    if (favorites.length === 0) {
        return [];
    }
    if (favorites[0] === null) {
        return [];
    }
    return favorites;
}

export const addFavorite = (cat: Cat) => {
    if (!cat) return;
    const prevFavorites = getFavorites();

    const newFavorites = [...prevFavorites, cat];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
};

export const removeFavorite = (catID: string | undefined) => {
    if (!catID) return;
    getFavorites();
    const prevFavorites = getFavorites();
    const newFavorites = prevFavorites?.filter((cat) => cat.id !== catID);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
};