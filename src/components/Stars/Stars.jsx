import React from 'react';
// Import du fichier CSS
import '../Stars/Stars.css'
// Import des icônes d'étoiles
import starIcon from '../../assets/img/Stars.png'
import starIcono from '../../assets/img/Starso.png'

// Création du composant Stars avec la propriété 'rating'
const Stars = ({ rating }) => {
  // Calcul du nombre d'étoiles remplies et vides
  const filledStars = parseInt(rating);
  const emptyStars = 5 - filledStars;

  // Rendu du composant Stars
  return (
    <div className="star-rating">
      {/* Affichage des étoiles vides */}
      {[...Array(emptyStars)].map((_, index) => (
        <img key={index} src={starIcon} alt="Star" className="star empty" />
      ))}
      {/* Affichage des étoiles remplies */}
      {[...Array(filledStars)].map((_, index) => (
        <img key={index} src={starIcono} alt="Star" className="star filled" />
      ))}
    </div>
  );
};

// Export du composant Stars
export default Stars;