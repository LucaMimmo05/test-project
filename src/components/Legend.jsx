import React, { useEffect, useState } from "react";
import Card from "./Card";

function Legend() {
    const [legends, setLegends] = useState([]);

    useEffect(() => {
        const dataRequest = async () => {
            try {
                const response = await fetch(
                    "https://sample-apis-sigma.vercel.app/api/dipendenti"
                );

                if (!response.ok) {
                    throw new Error(
                        `Errore nella richiesta: ${response.statusText}`
                    );
                }

                const data = await response.json();

                const referents = data.filter(
                    (emp) =>
                        emp.categoria === "manager" ||
                        emp.categoria === "dirigente"
                );

                const codeToNameMap = {};
                referents.forEach((ref) => {
                    codeToNameMap[ref.codiceFiscale] = ref.nome;
                });

                const limitDate = new Date("2001-01-01");

                const filteredLegends = data
                    .filter((legend) => {
                        const [day, month, year] =
                            legend.dataAssunzione.split("/");
                        const date = new Date(`${year}-${month}-${day}`);
                        return date < limitDate;
                    })
                    .map((legend) => ({
                        category: legend.categoria,
                        name: legend.nome,
                        surname: legend.cognome,
                        cf: legend.codiceFiscale,
                        hireDate: legend.dataAssunzione,
                        referralName:
                            codeToNameMap[legend.nomeRiferimento] || "N/A",
                    }));

                setLegends(filteredLegends);
            } catch (error) {
                console.log(error);
            }
        };
        dataRequest();
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>
                Dipendenti che lavorano dal 2001
            </h1>
            <br />
            <div className="grid-cont">
                {legends.map((legend, index) => (
                    <Card key={index} employer={legend} />
                ))}
            </div>
        </div>
    );
}

export default Legend;
