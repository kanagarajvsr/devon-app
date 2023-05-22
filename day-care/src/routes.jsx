import { Route, Routes, Navigate} from "react-router-dom";
import { SessionDetail, Sessions, News, Childrens, Home } from './pages';


 const AppRoutes = () => {

    return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/news" element={<News />} />
                <Route exact path="/children" element={<Childrens />} />
                <Route exact path="/sessions" element={<Sessions />} />
                <Route exact path="/session/:id" element={<SessionDetail />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
 
    );
};
 

export default AppRoutes;

