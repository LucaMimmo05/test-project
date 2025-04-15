import React from "react";
import Card from "./Card";

function Employee() {
    const dataRequest = async () => {
        try {
            const response = await fetch(
                "http://its.digitalminds.cloud/Dipendenti.json"
            );

            if (!response.ok) {
                throw new Error("Errore status: " + response.status);
            }

            const json = response.json();

            drawEmployee(json);
        } catch (error) {
            console.log("Errore try/catch: " + error);
        }
    };

    dataRequest();

    const drawEmployee = (json) => {};

    return (
        <div>
            <Card />
        </div>
    );
}

export default Employee;
