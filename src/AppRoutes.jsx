import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Error404 from "./Pages/Error404/Error404"; 
import Housing from "./Pages/Housing/Housing";

/**
 * Définition les routes de l'application
 */
const AppRoutes = () => {
  return (
    <Routes>
      {/* Route pour la page d'accueil */}
      <Route path="/" element={<Home />} />
      
      {/* Route pour la page "à propos" */}
      <Route path="/about" element={<About />} />
      
      {/* Route pour la page de logement */}
      <Route path="/housing/:id" element={<Housing />} />
      
      {/* Route pour la page 404 */}
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRoutes;