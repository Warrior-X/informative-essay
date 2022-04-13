import { Component } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default class Header extends Component {
    render() {
        return (
            <div className="pb-2 mb-4 w-full bg-slate-300 dark:bg-[#0e0e2c]">
                <ThemeToggle />
                <span className="font-orbitron text-black dark:text-white">
                    <Link to="/">Home</Link>
                </span>

                <div className="float-right mx-4 text-black dark:text-white">
                    <span className="p-3 mx-2 bg-slate-400 hover:bg-slate-500 dark:bg-[#25253c] dark:hover:bg-[#2f2f4a] rounded-b-lg">
                        <Link to="/pl">Programming Languages</Link>
                    </span>
                    <span className="p-3 mx-2 bg-slate-400 hover:bg-slate-500 dark:bg-[#25253c] dark:hover:bg-[#2f2f4a] rounded-b-lg">
                        <Link to="/os">Operating Systems</Link>
                    </span>
                    <span className="p-3 mx-2 bg-slate-400 hover:bg-slate-500 dark:bg-[#25253c] dark:hover:bg-[#2f2f4a] rounded-b-lg">
                        <Link to="/ai">Artificial Intellegience</Link>
                    </span>
                </div>
            </div>
        );
    }
}
