import React from 'react';

const Card = (props) => {
    const {name,id,email} = props.monster

    return(
      <div className="card-container">
        <img 
          alt={`monster ${name}`} 
          src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
  )
}

export default Card