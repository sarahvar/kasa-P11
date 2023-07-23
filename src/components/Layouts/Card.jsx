//Fonction qui nous permets de prendre les données pour créer une carte (logements)

const Card = ({ id, title, cover }) => {
  return (
    <figure key={id}>
      <div>
        <div>
          <img src={cover} alt={title} />
        </div>
        <div className="filter"></div>
      </div>
      <h3>{title}</h3>
    </figure>
  );
};
export default Card;
