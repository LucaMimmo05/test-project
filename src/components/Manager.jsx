import React, { useState, useEffect } from "react";
import Card from "./Card";

function Manager() {
    const [managers, setManagers] = useState([]);

    useEffect(() => {
        const dataRequest = async () => {
            try {
                const response = await fetch(
                    `http://its.digitalminds.cloud/Dipendenti.json`
                );

                if (!response.ok) {
                    throw new Error(
                        `Errore nella richiesta, ${response.message}`
                    );
                }

                const data = await response.json();

                const filteredManager = drawManager(data);
                setManagers(filteredManager);

                console.log(filteredManager);
            } catch (error) {
                console.log(error);
            }
        };

        dataRequest(); 
    }, []);

    const drawManager = (managers) => {
        return managers
            .filter((manager) => manager.categoria === "manager") 
            .map((manager) => ({
                category: manager.categoria,
                name: manager.nome,
                surname: manager.cognome,
                cf:manager.codiceFiscale,
                hireDate: manager.dataAssunzione,
                referralCode: manager.nomeRiferimento
            }));
    };

    return (
        <div>
            {managers.map((legend, index) => (
                <Card key={index} employer={legend} />
            ))}
        </div>
    );
}
export default Manager;
