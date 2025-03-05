import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CatsPage from '../pages/CatsPage';
import MainLayout from '../layouts/MainLayout';
import CatDetailPage from '../pages/CatDetailPage';
import FavoritesPage from "../pages/FavoritesPage.tsx";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<CatsPage />} />
                    <Route path="/details/:id" element={<CatDetailPage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter