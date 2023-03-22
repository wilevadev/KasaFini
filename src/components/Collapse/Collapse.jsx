// Importation de la bibliothèque React et du Hook useState
import React, { useState } from 'react';
// Import du fichier CSS
import '../Collapse/Collapse.css';

// Création du composant Collapse
function Collapse({ id, title, content, className }) {
  // Déclaration de l'état pour le contrôle de l'ouverture/fermeture du composant
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état d'ouverture/fermeture du composant
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // Rendu du composant Collapse
  return (
    <div
      id={id}
      className={`collapsible ${isOpen ? 'active' : ''} ${className}`}
    >
      {/* Bouton pour basculer l'état d'ouverture/fermeture du composant */}
      <button onClick={toggleCollapse}>{title}</button>
      {/* Contenu du composant */}
      <div className="content">{content}</div>
    </div>
  );
}

// Export du composant Collapse
export default Collapse;
