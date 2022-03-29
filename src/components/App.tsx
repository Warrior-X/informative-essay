import ThemeToggle from "./ThemeToggle";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const App = () => {
    return (
        <div className="min-h-screen bg-slate-200 dark:bg-background">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <ThemeToggle />
        </div>
    );
};

export default App;
