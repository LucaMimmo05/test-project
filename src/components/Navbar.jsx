import React from "react";

function Navbar() {
    const handleClick = (role) => {
        const url = new URL(window.location);
        url.searchParams.set("role", role);
        window.history.pushState({}, '', url);
        window.dispatchEvent(new PopStateEvent("popstate"));
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                onClick={() => handleClick("employee")}
                                className="nav-link active"
                                aria-current="page"
                            >
                                Employee
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="manager"
                                onClick={() => handleClick("manager")}
                            >
                                Manager
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="director"
                                onClick={() => handleClick("director")}
                            >
                                Director
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="legend"
                                onClick={() => handleClick("legend")}
                            >
                                Legend
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
