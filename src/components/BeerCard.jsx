import React from "react";
import { Image } from "react-bootstrap";
import FavouriteIcon from "./FavouriteIcon";

const BeerCard = ({ beer, onToggleFavorite }) => {
  const { name, image_url, id, favourite, description } = beer;
  return (
    <div className="flip-card card-margin">
      <div className="flip-card-inner">
        <div className="flip-card-front ">
          <div className="topright" onClick={() => onToggleFavorite(id)}>
            {favourite ? (
              <FavouriteIcon color="red" />
            ) : (
              <FavouriteIcon color="white" />
            )}
          </div>
          <div className="imageContainer">
            <Image src={image_url} alt="Avatar" />
            <h5>{name}</h5>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center flip-card-back">
          <div className="topright" onClick={() => onToggleFavorite(id)}>
            {favourite ? (
              <FavouriteIcon color="red" />
            ) : (
              <FavouriteIcon color="white" />
            )}
          </div>
          <div>
            <h5>{name}</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
