import { Link } from "react-router-dom";
import Card from "./Card";
import logements from "../../datas/logements.json";

//Permets de d'afficher les cards pour la page logements 
export default function Cards() {


const logements_list = logements.map((logement) => (
  <Link key={logement.id} to={`logement/${logement.id}`}>
     <Card key={logement.id} title={logement.title} cover={logement.cover} />
  </Link>
))



  return (
    <section className="logements_container">
    {logements_list}
    </section>
  );
}
