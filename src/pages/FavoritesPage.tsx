import Catitem from "../components/CatItem.tsx";
import "../styles/FavoritesPage.css"
import {getFavorites} from "../lib/favorites.ts";

const FavoritesPage: React.FC = () => {
    const favorites = getFavorites();

    return (
        <div className="favorites-page">
            <h2>Любимые котики</h2>
            {favorites?.length ?
            <div className="favorites-list">
                {favorites.map((cat, index) => (
                    <Catitem key={index} cat={cat} />
                ))}
            </div>
             :
            <p className="favorites-list__empty"> У вас нет любимых котиков :(((</p>}
        </div>
    );
};

export default FavoritesPage;