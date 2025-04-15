import React from "react";

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
