import { Link } from "react-router-dom";
import headerimg from "../assets/images/logo.svg";

//Créer le component Header réutilisable pour la page about et Logement
export default function Header() {
  return (
    <header>
      <div>
        <img className="headerimg" src={headerimg} alt="kasa" />
      </div>
      <nav>
        <ul>
          <li>
            <Link className="accueil" to={"/"}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to={"/about"}>A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
