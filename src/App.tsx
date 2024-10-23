import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { PAGES } from "./CONST.ts";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={PAGES.Main} element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App
