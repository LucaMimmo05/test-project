import React from "react";

function Employee() {
    const url = "http://its.digitalminds.cloud/Dipendenti.json";

    const dataRequest = async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("errore: " + response.status);
            }

            const json = response.json();

            console.log(json);
        } catch (error) {
            console.log(error);
        }
    };

    dataRequest();

    return <div>Employee</div>;
}

export default Employee;
