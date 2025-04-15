import React from "react";
import "../styles/card.css";

function Card({ employer }) {
    return (
        <div className="content-cards">
            <div className="card">
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
                        Refferal code : {employer.refferalCode}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;
