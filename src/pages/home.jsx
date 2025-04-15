import React from "react";

function home() {
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get("role");

    const renderHome = () => {

        switch(role) {

            case "employee":
                renderEmployee();
                break;

            case "technical":
                renderTechnical();
                break;
            
            case "manager":
                renderManager();
                break;
            
            case "director":
                renderDirector();
        }
    }


    const renderTechnical = () => {
        return (
            <>

            </>
        )
    }


    const renderEmployee = () => {
        return (
            <>
            
            </>
        )
    }
    
    const renderManager = () => {
        return (
            <>
            
            </>
        )
    }
    
    const renderDirector = () => {
        return (
            <>
            
            </>
        )
    }



    return <div>
        {renderHome()}
    </div>;
}

export default home;
