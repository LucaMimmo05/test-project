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
                    <h6 className="card-subtitle mb-2 text-muted">
                        {employer.category}
                    </h6>
                    <p className="card-text">Hire date:{employer.hireDate}</p>
                    <p className="card-text">CF: {employer.cf}</p>
                    <p className="card-text">
                        Nome Di Riferimento : {employer.referralName}
                    </p>
                    <p className="card-text">{employer.category}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Hire date: {employer.hireDate}
                    </li>
                    <li className="list-group-item">CF: {employer.cf}</li>
                    <li className="list-group-item">
                        Refferal code : {employer.referralCode}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Card;
