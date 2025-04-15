import React, { useState, useEffect } from "react";
import Card from "./Card";

function Employee() {
    const [legends, setLegends] = useState([]);
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

                const filteredLegends = drawLegend(data);
                setLegends(filteredLegends);

                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        dataRequest();
    }, []);

    const drawLegend = (legends) => {
        return legends.map((legend) => ({
            category: legend.categoria,
            name: legend.nome,
            surname: legend.cognome,
            cf: legend.codiceFiscale,
            hireDate: legend.dataAssunzione,
            referralCode: legend.nomeRiferimento,
        }));
    };

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Tutti i dipendenti</h1>
            <br />
            {legends.map((legend, index) => (
                <Card key={index} employer={legend} />
            ))}
        </div>
    );
}

export default Employee;
