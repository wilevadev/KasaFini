import React from 'react';

// Import du fichier CSS
import '../Error404/Error404.css';
import { Link } from "react-router-dom";

// Création du composant Error404
const Error404 = () => {
  // Rendu du composant Error404
  return (
    
      <div>
          {/* Affichage du code d'erreur */}
          <p className='error'>404</p>
          {/* Affichage du message d'erreur */}
          <p className='oups'>Oups! La page que vous demandez n'existe pas.</p>  
          {/* Lien pour revenir à la page d'accueil */}
          <Link to="/" className='retour'> Retour à la page d'accueil</Link>
        </div>
      
  );
};

// Export du composant Error404
export default Error404;