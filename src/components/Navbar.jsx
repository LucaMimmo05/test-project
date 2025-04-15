import React from "react";
import "../styles/navbar.css";

function Navbar() {
    const handleClick = (role) => {
        const url = new URL(window.location);
        url.searchParams.set("role", role);
        window.history.pushState({}, "", url);
        window.dispatchEvent(new PopStateEvent("popstate"));
    };

    return (
        <nav>
            <a className="navbar-brand" href="../">
                <h1>Website</h1>
            </a>

            <div className="links">
                <a
                    onClick={() => handleClick("employee")}
                    className="nav-link active"
                    aria-current="page"
                >
                    Tutti i Dipendenti
                </a>
                <a
                    className="nav-link"
                    id="manager"
                    onClick={() => handleClick("manager")}
                >
                    Manager
                </a>
                <a
                    className="nav-link"
                    id="director"
                    onClick={() => handleClick("director")}
                >
                    Direttori
                </a>
                <a
                    className="nav-link"
                    id="legend"
                    onClick={() => handleClick("legend")}
                >
                    Leggende
                </a>
                <a
                    className="nav-link"
                    id="legend"
                    onClick={() => handleClick("technical")}
                >
                    Tecnici
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
