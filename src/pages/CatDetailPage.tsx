import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import "../styles/CatDetailPage.css"

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

const CatDetailPage = () => {
    const {id} = useParams<{ id: string }>();
    const [cat, setCat] = useState<Cat | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCatDetails = async () => {
            try {
                const response = await axios.get(
                    `https://api.thecatapi.com/v1/images/${id}`,
                    {
                        headers: {
                            "x-api-key": "live_UjZr3vGTlu7lC3DyBds595TrU4TW0lkGDHGAc6zJLfrB310Ko9iDLMLjJV2S0lbO"
                        },
                    }
                );
                setCat(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Ошибка загрузки данных:", error);
            }
        };

        if (id) {
            fetchCatDetails();
        }
    }, [id]);

    return isLoading ?
        <p>Загрузка котиков, подождите...</p>
        :
        <div className="cat-detail">
            <button className="back-button" onClick={() => navigate(-1)}>
                Назад
            </button>
            <h2 className="cat-detail__title">
                {cat?.breeds && cat.breeds.length > 0 ? cat.breeds[0].name : "Кошка"}
            </h2>
            <img
                className="cat-detail__image"
                src={cat?.url}
                alt="Изображение не найдено"
            />
            {cat?.breeds && cat.breeds.length > 0 && (
                <div className="cat-detail__info">
                    <p className="cat-detail__info-description">
                        <p>Описание: </p> {cat.breeds[0].description}
                    </p>
                    <p className="cat-detail__info-temperament">
                        <p>Характер: </p>{cat.breeds[0].temperament}
                    </p>
                    <p className="cat-detail__info-origin">
                        <p>Происхождение: </p>{cat.breeds[0].origin}
                    </p>
                </div>
            )}
        </div>
}
export default CatDetailPage;