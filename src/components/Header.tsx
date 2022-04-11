import { Component } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default class Header extends Component {
    render() {
        return (
            <div className="w-full bg-slate-300 dark:bg-[#0e0e2c] pb-2 mb-4">
                <ThemeToggle />
                <span className="font-orbitron text-white"><Link to="/">Home</Link></span>

                <div className="float-right text-white mx-4">
                    <span className="mx-2 p-3 bg-[#25253c] rounded-b-lg"><Link to="/pl">Programming Languages</Link></span>
                    <span className="mx-2 p-3 bg-[#25253c] rounded-b-lg"><Link to="/os">Operating Systems</Link></span>
                    <span className="mx-2 p-3 bg-[#25253c] rounded-b-lg"><Link to="/ai">Artificial Intellegience</Link></span>
                </div>
            </div>
        )
    }
}
