import React from 'react';
import "./cards.scss";


const Cards = (props) => {
    return (
      <div className="card">
        <div className="card__inner">
          <img className="card__inner-img" src={props.cardImg} alt="" />
          <h3 className="card__inner-title">{props.cardTitle}</h3>
          <p className="card__inner-descr">{props.cardDescription}</p>
        </div>
      </div>
    );
  };

export default Cards;
