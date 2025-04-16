import React, { useState, useEffect } from "react";
import Card from "./Card";

function Employee() {
    const [employees, setEmployees] = useState([]);

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

                const directors = data.filter(
                    (emp) =>
                        emp.categoria === "dirigente" ||
                        emp.categoria === "manager"
                );

                const codeToNameMap = {};
                directors.forEach((dir) => {
                    codeToNameMap[dir.codiceFiscale] = dir.nome;
                });

                const filteredEmployees = data.map((employee) => ({
                    category: employee.categoria,
                    name: employee.nome,
                    surname: employee.cognome,
                    cf: employee.codiceFiscale,
                    hireDate: employee.dataAssunzione,
                    referralName:
                        codeToNameMap[employee.nomeRiferimento] || "N/A",
                }));

                setEmployees(filteredEmployees);
            } catch (error) {
                console.log(error);
            }
        };

        dataRequest();
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Tutti i dipendenti</h1>
            <br />
            <div className="grid-cont">
                {employees.map((employee, index) => (
                    <Card key={index} employer={employee} />
                ))}
            </div>
        </div>
    );
}

export default Employee;
