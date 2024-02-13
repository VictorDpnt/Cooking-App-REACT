import React from "react";

const Cards = ({ meal }) => {
  return (
    <div className="cards">
      <img src={meal.strMealThumb} alt="" />
      <h2>{meal.strMeal}</h2>
      <h3>Origin : {meal.strArea}</h3>
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default Cards;
