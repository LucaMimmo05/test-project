import React from 'react'

function Card({legend}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
    <div className="card-body">
        <h5 className="card-title">{legend.name} {legend.surname}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{legend.category}</h6>
        <p className="card-text">
        Hire date:{legend.hireDate} 
        CF: { legend.cf}
        Refferal code : {legend.refferalCode}
        </p>
        
    </div>
</div>
  )
}

export default Card