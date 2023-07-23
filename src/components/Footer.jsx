import logo from "../assets/images/logo-footer.svg";


//Créer le component Footer réutilisable pour la page about et Logement
export default function Footer() {
  return (
    <div className="footer">
      <div className="logo-footer">
        <img src={logo} alt="logo kasa" />
      </div>
      <div className="footer-txt">© 2020 Kasa. All rights reserved</div>
    </div>
  );
}
