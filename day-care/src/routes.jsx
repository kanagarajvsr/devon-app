import { Route, Routes, Navigate} from "react-router-dom";
import { Sessions, News, Childrens, Home,AddNews, AddChildren } from './pages';
// All the page routes are defined here.
 const AppRoutes = () => {
    return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/news" element={<News />} />
                <Route exact path="/news/add" element={<AddNews />} />
                <Route exact path="/children" element={<Childrens />} />
                <Route exact path="/children/add" element={<AddChildren />} />
                <Route exact path="/sessions" element={<Sessions />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
 
    );
};
 

export default AppRoutes;

