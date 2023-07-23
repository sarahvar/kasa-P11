import aboutimg from "../../assets/images/about-banner.jpg";


//Permets de créer le component Aboutbanner qui est utiliser pour la bannière de la page about
export default function Aboutbanner() {
  return (
    <div className="layout">
      <img src={aboutimg} alt="ocean " />
    </div>
  );
}
