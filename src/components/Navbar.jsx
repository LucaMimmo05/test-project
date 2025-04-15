import React from "react";

function Navbar() {
    const handleClick = (role) => {
        const url = new URL(window.location);
        url.searchParams.set("role", role);
        window.history.pushState({}, "", url);
        window.dispatchEvent(new PopStateEvent("popstate"));
    };

    return (
        <div class="container">
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a
                    href="../"
                    class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                >
                    <svg
                        class="bi me-2"
                        width="40"
                        height="32"
                        aria-hidden="true"
                    >
                        <use xlink:href="#bootstrap"></use>
                    </svg>
                    <span class="fs-4">IncAgency</span>
                </a>

                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a
                            onClick={() => handleClick("employee")}
                            class="nav-link"
                        >
                            Employees
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            onClick={() => handleClick("manager")}
                            class="nav-link"
                        >
                            Manager
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            onClick={() => handleClick("director")}
                            class="nav-link"
                        >
                            Director
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            onClick={() => handleClick("legend")}
                            class="nav-link"
                        >
                            Legend
                        </a>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default Navbar;
