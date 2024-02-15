import React, { useState, useEffect } from "react";

import Home from "./components/Home";
import Favorites from "./components/Favorites";
import { fetchBeers } from "./services/api";
import NavBar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [beers, setBeers] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchBeers(query, page)
      .then((data) => {
        setBeers((prevBeers) => [...prevBeers, ...data]);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((error) => console.error("Error fetching beers:", error));
  }, [query, page]);

  useEffect(() => {
    const favoriteBears = localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : [];
    setFavorites(favoriteBears);
  }, []);

  const handleSearch = (searchQuery) => {
    console.log("Searching....", searchQuery);
    setQuery(searchQuery);
    setPage(1);
  };

  const handleToggleFavorite = (id) => {
    const updatedBeers = beers.map((beer) =>
      beer.id === id ? { ...beer, favorite: !beer.favorite } : beer
    );
    setBeers(updatedBeers);

    const updatedFavorites = updatedBeers.filter((beer) => beer.favorite);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  const handleRemoveFavorite = (id) => {
    const updatedBeers = beers.map((beer) =>
      beer.id === id ? { ...beer, favorite: false } : beer
    );
    setBeers(updatedBeers);

    const updatedFavorites = updatedBeers.filter((beer) => beer.favorite);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route
          path="home/*"
          element={
            <Home
              beers={beers}
              onToggleFavorite={handleToggleFavorite}
              page={page}
            />
          }
        />
        <Route
          path="favorites/*"
          element={
            <Favorites
              favorites={favorites}
              onRemoveFavorite={handleRemoveFavorite}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
