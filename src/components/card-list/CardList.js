import React from 'react';
import Card from './Card';
import "./card.css";

const CardList = (props) => {

  return (
    <div className="card-list">
      {props.show.map((monster)=>{
        return <Card monster={monster} key={monster.id}/>
        })}
    </div>
  )
}

export default CardList