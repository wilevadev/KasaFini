import React from 'react';
// Import du fichier CSS
import '../Tags/Tags.css';

// Création du composant Tag avec la propriété 'text'
const Tag = ({ text }) => {
  // Rendu du composant Tag
  return (
    // Création d'un élément 'span' avec la classe 'tag'
    <span className="tag">
      <span className="tag-text">{text}</span>
    </span>
  );
};

// Export du composant Tag
export default Tag;