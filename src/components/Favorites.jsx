import React from "react";
import BeerCard from "./BeerCard";

const Favorites = ({ favorites, onRemoveFavorite }) => {
  return (
    <>
      <h2>{favorites.length !== 0 ? "Favorites" : "No favorites is added"}</h2>
      {favorites.map((beer) => (
        <div className="d-flex justify-content-center">
          <BeerCard
            key={beer.id}
            beer={beer}
            onToggleFavorite={onRemoveFavorite}
          />
        </div>
      ))}
    </>
  );
};

export default Favorites;
