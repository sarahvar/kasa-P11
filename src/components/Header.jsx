import { NavLink } from "react-router-dom";
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
            <NavLink className="accueil" to={"/"}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
