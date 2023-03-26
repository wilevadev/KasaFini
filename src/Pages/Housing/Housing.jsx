import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';
import Carousel from '../../components/Carousel/Carousel';
import StarRating from '../../components/Stars/Stars';
import Tag from '../../components/Tags/Tags';
import './Housing.css';
const Housing = () => {
  const { id } = useParams();
  const [HousingData, setHousingData] = useState({});
  const navigate = useNavigate();
 useEffect(() => {
    fetch('/Logements.json')
      .then((res) => res.json())
      .then((data) => {
        const housing = data.find((item) => item.id === id);
        setHousingData(housing);
        if (!housing) navigate('/404');
      })
      .catch(() => navigate('/404'));
  }, [id, navigate]);
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
return (
    <div>
      {HousingData && Object.keys(HousingData).length !== 0 ? (
        <div className="logement">
          <div className="logement-details">
            <Carousel images={pictures} />
            <div className="retail">
              <div className="left-column">
                <h1 className="single-line-text">{title}</h1>
                <p className="locations">{location}</p>
                <div className="tags-container">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
              <div className="right-column">
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
                <div className="stars">
                  <StarRating rating={rating} />
                </div>
              </div>
            </div>
            <div className="Collapse1">
              <div className="half-width description">
                <Collapse
                  id="description"
                  title={<span className='collapse-title'>Description</span>}
                  content={
                    <div className="description-content">{description}</div>
                  }
                />
              </div>
              <div className="half-width equipments">
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

export default Housing;