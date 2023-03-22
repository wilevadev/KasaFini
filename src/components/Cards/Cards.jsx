// Importation de la bibliothèque React
import React from 'react';
// Importation de Link depuis react-router-dom pour gérer la navigation
import { Link } from 'react-router-dom';
// Import du fichier CSS
import '../Cards/Cards.css';

// Création du composant Card
const Card = ({ housing }) => {
  // Rendu du composant Card
  return (
    // Conteneur principal de la carte
    <div className="card-container">
      {/* Lien vers la page de détails du logement*/}
      <Link to={`/Housing/${housing.id}`}>
        {/* Image de couverture du logement*/}
        <img src={housing.cover} alt={housing.title} />
        {/* Titre du logement*/}
        <h3>{housing.title}</h3>
      </Link>
    </div>
  );
};

// Export du composant Card
export default Card;