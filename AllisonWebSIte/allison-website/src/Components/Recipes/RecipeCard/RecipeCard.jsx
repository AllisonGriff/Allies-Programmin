import React from 'react';
import './RecipeCard.css';

const RecipeCard = (props) => {
  let FixedParagraph
  if(props.description){
  const wordLimit = 250;
  const words = props.description.split('');

  FixedParagraph = words.length > wordLimit
    ? words.slice(0, wordLimit).join('') + '...'
    : props.description;
  }

  return (
    <div> 
      <div className="RecipeCard">
        <a href ={props.link} target="_blank">
        <img src={props.pic} alt={props.title}></img>
        <h1>{props.title}</h1>
        <p>{FixedParagraph ? FixedParagraph : ""}</p>
        </a>
      </div>
    </div>
  );
}

export default RecipeCard;