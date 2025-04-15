import React, { useEffect, useState } from "react";
import Card from "./Card";

function Technical() {
    const [technicals, setTechnicals] = useState([]);
    

    useEffect(() => {
        const dataRequest = async () => {
            try {
                const response = await fetch("http://its.digitalminds.cloud/Dipendenti.json");

                if (!response.ok) {
                    throw new Error(`Errore nella richiesta: ${response.statusText}`);
                }

                const data = await response.json();
                

                const referedirents = data.filter(emp => 
                  emp.categoria === "manager" || emp.categoria === "dirigente"
              );

                const codeToNameMap = {};
                referedirents.forEach(dir => {
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
                        referralName: codeToNameMap[employee.nomeRiferimento] || "N/A"
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
            {technicals.map((technical, index) => (
                <Card key={index} employer={technical} />
            ))}
        </div>
    );
}

export default Technical;
