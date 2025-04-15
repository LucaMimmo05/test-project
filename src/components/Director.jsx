import React, { useEffect, useState } from "react";
import Card from "./Card";

function Director() {
    const [directors, setDirectors] = useState([]);
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

                const filteredDirectors = drawDirector(data);
                setDirectors(filteredDirectors);

                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        dataRequest();
    }, []);

    const drawDirector = (directors) => {
        return directors
            .filter((director) => {
                return director.categoria == "dirigente";
            })
            .map((director) => ({
                category: director.categoria,
                name: director.nome,
                surname: director.cognome,
                cf: director.codiceFiscale,
                hireDate: director.dataAssunzione,
                referralName: "N/A",
            }));
    };

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Tutti i Dirigenti</h1>
            <br />
            {directors.map((director, index) => (
                <Card key={index} employer={director} />
            ))}
        </div>
    );
}

export default Director;
