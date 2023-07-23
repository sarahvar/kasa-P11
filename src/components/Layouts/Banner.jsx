import homeimg from "../../assets/images/accueil-banner.jpg";

//Permets de créer le component HomeBanner qui est utiliser pour la bannière de la page d'accueil
export default function Homebanner() {
  return (
    <div className="layout">
      <h1>Chez vous, partout et ailleurs</h1>
      <img src={homeimg} alt="ocean " />
    </div>
  );
}
