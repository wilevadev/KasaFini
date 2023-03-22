// Importation de la bibliothèque React et du Hook useState
import React, { useState } from 'react';
// Import du fichier CSS
import './Carousel.css';
// Import de l'icône de flèche
import arrowIcon from '../../assets/img/arrow.png';

// Création du composant Carousel
const Carousel = ({ images }) => {
  // Déclaration de l'état pour le contrôle de l'index de l'image courante
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  // Fonction pour passer à l'image précédente
  const previousImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  // Rendu du composant Carousel
  return (
    <div className="carousel">
      <div className="carousel-images">
        {/* Afficher les flèches de navigation si il y a plus d'une image */}
        {images.length > 1 && (
          <React.Fragment>
            <div className="carousel-arrow carousel-arrow-left" onClick={previousImage}>
              <img src={arrowIcon} alt="Previous" />
            </div>
            <div className="carousel-arrow carousel-arrow-right" onClick={nextImage}>
              <img src={arrowIcon} alt="Next" />
            </div>
          </React.Fragment>
        )}
        {/* Afficher l'image courante */}
        <img src={images[currentIndex]} alt="" />
        {/* Afficher le compteur d'images si il y a plus d'une image */}
        {images.length > 1 && (
          <div className="carousel-counter">{currentIndex + 1}/{images.length}</div>
        )}
      </div>
    </div>
  );
};

// Export du composant Carousel
export default Carousel;