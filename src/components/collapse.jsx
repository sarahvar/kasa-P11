import React, { useState } from "react";

//Permet de créer le component collapse utilisable pour la page about et Logement
const Collapsible = (props) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div>
      <button className="button" onClick={toggle}>
        {props.label}
        {!open ? (
          <span>
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        ) : (
          <span>
            <i className="fa-solid fa-chevron-up"></i>
          </span>
        )}
      </button>
      {!open &&
        (Array.isArray(props.content) ? (
          <ul className="collapse__content">
            {" "}
            {props.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="collapse__content">{props.content}</p>
        ))}
    </div>
  );
};
export default Collapsible;
