import React, { useState } from "react";
import arrowleft from "../assets/images/arrow-left.svg";
import arrowright from "../assets/images/arrow-right.svg";

//Permets de créer le Carrousel pour la page Logement
const Carousel = ({ carousels }) => {
  const [current, setCurrent] = useState(0);
  const length = carousels.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div className="carousel">
      {carousels.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "carousel__active-picture"
                : "carousel__inactive-picture"
            }
          >
            {index === current && (
              <img src={picture} alt="" className="carousel__picture" />
            )}
          </div>
        );
      })}
      {length > 1 ? (
        <>
          <div className="carousel__previous" onClick={prevSlide}>
            <img src={arrowleft} alt="" className="carousel__previous-icon" />
          </div>
          <div className="carousel__next" onClick={nextSlide}>
            <img src={arrowright} alt="" className="carousel__next-icon" />
          </div>
          <div className="carousel__info">
            <span className="carousel__current-slide">{current + 1}</span> /{" "}
            <span className="carousel__total-slides">{length}</span>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Carousel;
