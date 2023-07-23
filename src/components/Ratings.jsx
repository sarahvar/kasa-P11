import React from "react";

import redstar from "../assets/images/redStar.svg";
import greystar from "../assets/images/greyStar.svg";

//Permets de calculer le nombre d'étoile grise ou rouge grâce au rating du logements.json

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating__icon"
            src={redstar}
            alt=""
          />
        ) : (
          <img
            key={star.toString()}
            className="rating__icon"
            src={greystar}
            alt=""
          />
        )
      )}
    </div>
  );
};

export default Rating;
