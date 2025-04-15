import React, { useState, useEffect } from "react";
import Employee from "../components/Employee";
import Technical from "../components/Technical";
import Director from "../components/Director";
import Manager from "../components/Manager";
import Legend from "../components/Legend";

function Home() {
    const [role, setRole] = useState(
        new URLSearchParams(window.location.search).get("role")
    );

    useEffect(() => {
        const onPopState = () => {
            const params = new URLSearchParams(window.location.search);
            setRole(params.get("role"));
        };

        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, []);

    const renderHome = () => {
        switch (role) {
            case "employee":
                return <Employee />;

            case "technical":
                return <Technical />;

            case "manager":
                return <Manager />;

            case "director":
                return <Director />;

            case "legend":
                return <Legend />;

            default:
                return (
                    <>
                        <h1>
                            Inserire un valore query role tra i seguenti per
                            visualizzare la pagina
                        </h1>
                        <p>employee, technical, manager, legend </p>
                    </>
                );
        }
    };

    return <div>{renderHome()}</div>;
}

export default Home;
