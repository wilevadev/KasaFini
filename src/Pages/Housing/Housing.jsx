import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Import des composants

import Collapse from '../../components/Collapse/Collapse';
import Carousel from '../../components/Carousel/Carousel';
import StarRating from '../../components/Stars/Stars';
import Tag from '../../components/Tags/Tags';
// Import du fichier CSS
import './Housing.css';

// Création de la page Housing
const Housing = () => {
  // Utilisation de useState pour gérer les données et les données du logement
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [HousingData, setHousingData] = useState({});

  // Charger les données JSON au montage du composant
  useEffect(() => {
    fetch('/logements.json')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  // Mettre à jour les données du logement lorsque "data" ou "id" changent
  useEffect(() => {
    if (data && data.length > 0) {
      setHousingData(data.find((housing) => housing.id === id));
    }
  }, [data, id]);

  // Destructuration des propriétés de HousingData
  const {
    title,
    pictures,
    description,
    host,
    rating,
    tags,
    location,
    equipments,
  } = HousingData;

  // Rendu de la page Housing
  return (
    <div>
      {/* Vérifie si HousingData n'est pas vide */}
        {HousingData && Object.keys(HousingData).length !== 0 ? (
          <div className="logement">
            <div className="logement-details">
              {/* Carousel d'images */}
              <Carousel images={pictures} />
              <div className="retail">
                <div className="left-column">
                  {/* Titre du logement */}
                  <h1 className="single-line-text">{title}</h1>
                  {/* Localisation du logement */}
                  <p className="locations">{location}</p>
                  {/* Tags */}
                  <div className="tags-container">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
                <div className="right-column">
                  {/* Informations sur l'hôte */}
                  <div className="host-info">
                    <p className="host-name">{host.name}</p>
                    {host.picture && (
                      <img
                        src={host.picture}
                        alt={host.name}
                        className="host-image"
                      />
                    )}
                  </div>
                  {/* Évaluation du logement */}
                  <div className="stars">
                    <StarRating rating={rating} />
                  </div>
                </div>
              </div>
              <div className="Collapse1">
                <div className="half-width description">
                  {/* Description du logement */}
                  <Collapse
                    id="description"
                    title={<span className='collapse-title'>Description</span>}
                    content={
                      <div className="description-content">{description}</div>
                    }
                  />
                </div>
                <div className="half-width equipments">
                  {/* Liste des équipements */}
                  <Collapse
                    id="equipments"
                    title={<span className='collapse-title'>Equipements</span>}
                    content={
                      <ul className="comma-list">
                        {equipments.map((equipment) => (
                          <li key={equipment}>{equipment} </li>
                          ))}
                        </ul>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
    );
  };
  
  // Export du composant Housing
  export default Housing;