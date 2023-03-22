import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/App.css"
// Import des pages
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error404/Error404"
import About from "./Pages/About/About";
import Housing from "./Pages/Housing/Housing";

// Création du composant App
const App = () => {
  return (
    <BrowserRouter>
      {/* Mise en place des routes */}
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Home />} />
        {/* Route pour la page "À propos" */}
        <Route path="/About" element={<About />} />
        {/* Route pour la page "Logement" avec l'id du logement en paramètre */}
        <Route path="/Housing/:id" element={<Housing />} />
        {/* Route pour la page d'erreur 404 si l'URL ne correspond à aucune route déclarée ci-dessus */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

// Export du composant App
export default App;