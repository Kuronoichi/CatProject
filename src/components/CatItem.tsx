import {Link} from "react-router-dom";
import {useFavorites} from "../lib/FavoriteContext.tsx";
// import {addFavorite, getFavorites, removeFavorite} from "../lib/favorites.ts";
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

const CatItem: React.FC<{ cat?: Cat }> = ({ cat }) => {
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    const isFavorite = cat ? favorites.some((fav: Cat) => fav.id === cat.id) : false;

    const handleFavoriteClick = () => {
        if (!cat) return;
        if (isFavorite) {
            removeFavorite(cat.id);
        } else {
            addFavorite(cat);
        }
    };

    return (
        <div className="cat-item">
            <Link to={`/details/${cat?.id}`}>
                <div className="cat-list__item" key={cat?.id}>
                    <img className="cat-list__img"
                         src={cat?.url}
                         width="80%"
                         height="80%"
                         alt="Изображение не найдено"/>
                    {cat?.breeds && cat.breeds.length > 0 ? (
                        <p className="cat-list__breed">Порода кошки: {cat?.breeds[0].name}</p>
                    ) : (
                        <p className="cat-list__breed"> Порода кошки неизвестна</p>)
                    }
                </div>
            </Link>

            <button className={`cat-item__fav-btn ${isFavorite ? "remove" : "add"}`} onClick={handleFavoriteClick}>
                {isFavorite ? "Удалить" : "Добавить"}
            </button>
        </div>
    )
}

export default CatItem;