import { useState, useEffect} from "react";
import CatsList from "../components/CatsList.tsx";
import axios from "axios";
import "../styles/CatsPage.css";

const CatsPage = () => {
    const [cats, setCats] = useState([]);
    const [search, setSearch] = useState("sibe");

    useEffect(() => {
        const fetchCats = async () => {
            try {
                let url = "https://api.thecatapi.com/v1/images/search?limit=10";
                if (search) {
                    url += `&breed_ids=${search}`;
                }

                const response = await axios.get(url,
                    {
                        headers: {
                            "x-api-key": "live_UjZr3vGTlu7lC3DyBds595TrU4TW0lkGDHGAc6zJLfrB310Ko9iDLMLjJV2S0lbO"
                        }
                    });

                setCats(response.data || []);
            } catch (err) {
                console.error('Ошибка загрузки данных', err);
            }
        }

        fetchCats();
    }, [search])

    return (
        <div className="cat-app">
            <h2 className="cat-app__title">Поиск кошек</h2>
            <input className="cat-app__search"
                   type="text"
                   placeholder="Поиск кошек..."
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
            />
            <CatsList cats={cats}/>
        </div>
    )
}
export default CatsPage;
