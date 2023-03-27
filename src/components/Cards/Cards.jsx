
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Cards/Cards.css";

const Card = ({ housing }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/Housing/${housing.id}`);
  };

  return (
    <div className="card-container" onClick={handleOnClick} style={{ cursor: "pointer" }}>
      <img src={housing.cover} alt={housing.title} />
      <p>{housing.title}</p>
    </div>
  );
};

export default Card;
