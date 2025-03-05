import CatItem from "./CatItem.tsx";

interface Cat {
    id: string;
    url: string;
    breeds: Breed[];

}

interface Breed {
    id: string;
    name: string;
    description?: string;
    temperament?: string;
    origin?: string;
}

interface CatListProps {
    cats: Cat[];
}

const CatsList: React.FC<CatListProps> = ({cats}) => {
    return (
        <div className="cat-list">
            {cats.length > 0 ? (
                cats.map((cat) => (
                    <CatItem key={cat.id} cat={cat}></CatItem>
                ))
            ) : (
                <p className="cat-list__empty">Кошки не найдены :(</p>
            )}
        </div>
    );
};

export default CatsList;