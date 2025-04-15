import React, { useEffect, useState } from "react";
import Card from "./Card";

function Legend() {
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
        const limitDate = new Date("2001-01-01");
        return legends
            .filter((legend) => {
                const [day, month, year] = legend.dataAssunzione.split("/");
                const date = new Date(`${year}-${month}-${day}`);
                return date < limitDate;
            })
            .map((legend) => ({
                category: legend.categoria,
                name: legend.nome,
                surname: legend.cognome,
                hireDate: legend.dataAssunzione,
                referralCode: legend.nomeRiferimento,
            }));
    };

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>
                Dipendenti che lavorano dal 2001
            </h1>
            <br />
            {legends.map((legend, index) => (
                <Card key={index} employer={legend} />
            ))}
        </div>
    );
}

export default Legend;
