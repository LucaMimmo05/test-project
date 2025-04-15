import React from 'react'

function Card({employer}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
    <div className="card-body">
        <h5 className="card-title">{employer.name} {employer.surname}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{employer.category}</h6>
        <p className="card-text">
        Hire date:{employer.hireDate} 
        CF: { employer.cf}
        Refferal code : {employer.refferalCode}
        </p>
        
    </div>
</div>
  )
}

export default Card