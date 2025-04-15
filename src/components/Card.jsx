import React from "react";
import "../styles/card.css";

function Card({ employer }) {
    return (
        <div className="content">
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">
                        {employer.name} {employer.surname}
                    </h5>
                    <p className="card-text">{employer.category}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Data di Assunzione: {employer.hireDate}
                    </li>
                    <li className="list-group-item">CF: {employer.cf}</li>
                    <li className="list-group-item">
                        Nome di Riferimento : {employer.referralName}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Card;
