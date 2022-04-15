import { StrictMode } from "react";
import { render } from "react-dom";
import "tailwindcss/tailwind.css";
import "index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "components/App";

render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>,
    document.getElementById("root"),
);
