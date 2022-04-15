import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import OS from "./OS";
import AI from "./AI";
import PL from "./PL";
import Header from "./Header";
import GE from "./GE";
import Glos from "./Glos";

const App = () => {
    return (
        <div className="w-screen min-h-screen bg-slate-200 dark:bg-background app pb-8">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/os" element={<OS />} />
                <Route path="/ai" element={<AI />} />
                <Route path="/pl" element={<PL />} />
                <Route path="/ge" element={<GE />} />
                <Route path="/glos" element={<Glos />} />
            </Routes>
        </div>
    );
};

export default App;
