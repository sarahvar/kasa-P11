  //Permets d'importer les components 
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logements from "./pages/logements";
import About from "./pages/about";
import ErrorPage from "./pages/error404";
import "../src/main.css";
import Logement from "./pages/Logement";

//Créer une const router avec createBrowserRouter qui utilise l' API DOM History pour mettre à jour l'URL et gérer la pile d'historique.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Logements />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/logement/:id",
    element: <Logement />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/logement/:id/notfound",
    element: <ErrorPage/>,
  },
  {
    path:"/:test",
    element: <ErrorPage/>,
  },
  {
    path:"/about/:test",
    element: <ErrorPage/>,
  },
]);
//API de données fourni par react router pour créer les routes
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
