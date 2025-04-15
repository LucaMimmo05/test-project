import React, { useState, useEffect } from "react";
import Card from "./Card";

function Manager() {
    const [managers, setManagers] = useState([]);

    useEffect(() => {
        const dataRequest = async () => {
            try {
                const response = await fetch(
                    "http://its.digitalminds.cloud/Dipendenti.json"
                );

                if (!response.ok) throw new Error("Errore nella richiesta");

                const data = await response.json();

                const directors = data.filter(
                    (emp) => emp.categoria === "dirigente"
                );

                const codeToNameMap = {};
                directors.forEach((dir) => {
                    codeToNameMap[dir.codiceFiscale] = dir.nome;
                });

                const codeToSurnameMap = {};
                directors.forEach((dir) => {
                    codeToSurnameMap[dir.codiceFiscale] = dir.cognome;
                });

                const filteredManagers = data
                    .filter((emp) => emp.categoria === "manager")
                    .map((manager) => ({
                        category: manager.categoria,
                        name: manager.nome,
                        surname: manager.cognome,
                        cf: manager.codiceFiscale,
                        hireDate: manager.dataAssunzione,
                        referralName:
                            codeToNameMap[manager.nomeRiferimento] + " "+
                                codeToSurnameMap[manager.nomeRiferimento] ||
                            "N/A",
                    }));

                setManagers(filteredManagers);
            } catch (error) {
                console.log(error);
            }
        };

        dataRequest();
    }, []);

    return (
        <div>
            {managers.map((manager, index) => (
                <Card key={index} employer={manager} />
            ))}
        </div>
    );
}

export default Manager;
