import React from "react";
import "../styles/navbar.css";

function Navbar() {
    const handleClick = (type) => {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set("role", type);
        const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
        window.history.pushState({}, "", newUrl);
    };

    return (
        <nav>
            <a className="navbar-brand" href="#">
                <h1>Website</h1>
            </a>

            <div className="links">
                <a
                    onClick={() => handleClick("employee")}
                    className="nav-link active"
                    aria-current="page"
                >
                    Employee
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
                    Director
                </a>
                <a
                    className="nav-link"
                    id="legend"
                    onClick={() => handleClick("legend")}
                >
                    Legend
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
