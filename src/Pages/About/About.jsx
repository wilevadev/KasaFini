import React from 'react';
// Import des composants

import Banner from "../../components/Banner/Banner";
import Collapse from '../../components/Collapse/Collapse';
// Import du fichier CSS
import "../About/About.css";

// Import de l'image de la bannière
import aboutBannerImage from '../../assets/img/kalen.png';

// Création du composant About
const About = () => {
  // Rendu du composant About
  return (
    <div>
      {/* Affichage de la bannière avec l'image importée */}
        <Banner image={aboutBannerImage} />
        {/* Conteneur pour les éléments Collapse */}
        <div className='allCollapse'>
          <div className="collapse-wrapper">
            {/* Premier élément Collapse */}
            <Collapse id="fiabilite" title="Fiabilité" content={<div className="collapse-content">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</div>} />
          </div>
          <div className="collapse-wrapper">
            {/* Deuxième élément Collapse */}
            <Collapse id="respect" title="Respect" content={<div className="collapse-content">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>} />
          </div>
          <div className="collapse-wrapper">
            {/* Troisième élément Collapse */}
            <Collapse id="service" title="Service" content={<div className="collapse-content">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</div>} />
          </div>
          <div className="collapse-wrapper">
            {/* Quatrième élément Collapse */}
            <Collapse id="securite" title="Sécurité" content={<div className="collapse-content">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div>} />
          </div>
        </div>
      </div>
  );
};

// Export du composant About
export default About;