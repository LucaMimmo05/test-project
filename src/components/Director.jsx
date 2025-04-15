import React, { useEffect, useState } from "react";
import Card from "./Card";

function Director() {
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
        return legends
            .filter((legend) => {
                return legend.categoria == "dirigente";
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
            {legends.map((legend, index) => (
                <Card key={index} legend={legend} />
            ))}
        </div>
    );
}

export default Director;
