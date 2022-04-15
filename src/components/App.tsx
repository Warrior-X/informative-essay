import ThemeToggle from "./ThemeToggle";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import OS from "./OS";
import AI from "./AI";
import PL from "./PL";
import Header from "./Header";
import GE from "./GE";

const App = () => {
    return (
        <div className="min-h-screen bg-slate-200 dark:bg-background">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/os" element={<OS />} />
                <Route path="/ai" element={<AI />} />
                <Route path="/pl" element={<PL />} />
                <Route path="/ge" element={<GE />} />
            </Routes>
        </div>
    );
};

export default App;
