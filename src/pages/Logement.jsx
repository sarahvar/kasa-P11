import React from "react";
import Header from "../components/Header";
import { Navigate, useParams } from "react-router-dom";
import logements from "../datas/logements.json";
import Carousel from "../components/carousel";
import Collapsible from "../components/collapse";
import Tags from "../components/tag";
import Rating from "../components/Ratings";
import Footer from "../components/Footer";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  if (logement === undefined) {
    return <Navigate to="/logement/notfound" />;
  }
  const { title, location, rating, host, equipments, description, pictures } =
    logement;
  const isHostSplited = host.name.split(" ");
  const [name, lastname] = isHostSplited;

  return (
    <>
      <Header />
      <main className="container">
        <Carousel carousels={pictures} />
        <section className="container-content">
          <div>
            <h1 className="title">{title}</h1>
            <p className="location">{location}</p>
            <div className="container-tag">
              {logement.tags.map((tag, index) => (
                <Tags key={index} getTag={tag} />
              ))}
            </div>
          </div>
          <div>
            <div className="host">
              <div className="container-host">
                <div className="host__name">
                  <p className="host__firstname">{name.trim()}</p>
                  <p className="host__lastname">{lastname.trim()}</p>
                </div>
                <img src={host.picture} alt="" className="host__picture" />
              </div>
              <Rating rating={rating} />
            </div>
          </div>
        </section>
        <div className="logement_collapse">
          <div className="logement_informations">
            <Collapsible label="Description" content={description} />
          </div>
          <div className="logement_informations">
            <Collapsible
              label="Equipements"
              className=""
              content={equipments}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Logement;
