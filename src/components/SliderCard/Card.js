import React from 'react';
import { CardStyled } from './style';

const Card = (props) => {

  return(
    <CardStyled>
      <div className="img-card">
        <img src={props.image} alt={props.title}/>
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </CardStyled>
  )
};

export default Card;