import React, { useState, useEffect } from "react";
// Import des composants
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Cards";
// Import des fichiers CSS
import "../Home/Home.css";
import "../../components/Cards/Cards.css";
// Import de l'image de la bannière
import bannerImage from "../../assets/img/IMG.png";
// Création du composant Home
const Home = () => {
  // Utilisation de useState pour gérer les données
  const [data, setData] = useState([]);
  // Charger les données JSON au montage du composant
  useEffect(() => {
    fetch("/Logements.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  // Rendu du composant Home
  return (
    <div>
      <div className="homepage-banner">
        {/* Affichage de la bannière */}
        <Banner image={bannerImage} />
        <div className="banner-title">
          {/* Titre sur la bannière */}
          <p>
            Chez vous,<span> partout et ailleurs</span>
          </p>
        </div>
      </div>
      {/* Cartes des logements */}
      <div className="outCards">
        <div className="Cards">
          {/* Création des cartes en fonction des données */}
          {data.map((housing) => (
            <Card key={housing.id} housing={housing} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Export du composant Home
export default Home;
