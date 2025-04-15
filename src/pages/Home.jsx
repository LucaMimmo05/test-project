import React from "react";
import Employee from "../components/Employee";
import Technical from "../components/Technical";
import Director from "../components/Director";
import Manager from "../components/Manager"
import Legend from "../components/Legend";

function home({role}) {
    
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
            
            default :
            return (
                <>
                <h1>Inserire un valore query role tra i seguenti per visualizzare la pagina</h1>
                <p>employee, technical, manager, legend </p>
                </>
            )
        }
    };

    return <div>{renderHome()}</div>;
}

export default home;
