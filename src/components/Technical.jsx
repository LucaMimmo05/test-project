import React, { useEffect, useState } from "react";
import Card from "./Card";

function Technical() {
    const [technicals, setTechnicals] = useState([]);

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

                const referedirents = data.filter(
                    (emp) =>
                        emp.categoria === "manager" ||
                        emp.categoria === "dirigente"
                );

                const codeToNameMap = {};
                referedirents.forEach((dir) => {
                    codeToNameMap[dir.codiceFiscale] = dir.nome;
                });

                const filteredTechnicals = data
                    .filter((employee) => employee.categoria === "tecnico")
                    .map((employee) => ({
                        category: employee.categoria,
                        name: employee.nome,
                        surname: employee.cognome,
                        cf: employee.codiceFiscale,
                        hireDate: employee.dataAssunzione,
                        referralName:
                            codeToNameMap[employee.nomeRiferimento] || "N/A",
                    }));

                setTechnicals(filteredTechnicals);
            } catch (error) {
                console.log(error);
            }
        };

        dataRequest();
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Tutti i tecnici</h1>
            <br />
            <div className="grid-cont">
                {technicals.map((technical, index) => (
                    <Card key={index} employer={technical} />
                ))}
            </div>
        </div>
    );
}

export default Technical;
