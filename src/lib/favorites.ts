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

export const getFavorites = (): Cat[] | null => {
    const savedFavorites = localStorage.getItem("favorites");
    if (!savedFavorites) {
        return null;
    }
    const favorites = JSON.parse(savedFavorites);
    if (favorites.length === 0) {
        return null;
    }
    if (favorites[0] === null) {
        return null;
    }
    return favorites;
}

export const addFavorite = (cat: Cat | undefined) => {
    if (!cat) return;
    const prevFavorites = getFavorites();
    const newFavorites = prevFavorites ? [...prevFavorites, cat] : [];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
};

export const removeFavorite = (catID: string | undefined) => {
    if (!catID) return;
    const prevFavorites = getFavorites();
    const newFavorites = prevFavorites?.filter((cat) => cat.id !== catID);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
};