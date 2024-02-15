import React, { useState, useEffect } from "react";

import Home from "./components/Home";
import Favorites from "./components/Favorites";
import { fetchBeers } from "./services/api";
import NavBar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import { BEER_PER_PAGE } from "./utils/constants";
import { checkFavourites, getFavourites } from "./utils/helper";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [beers, setBeers] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [hasMore, setHasMoreData] = useState(true);
  const [loading, setLoading] = useState(true)


  function fetchData() {
    setLoading(true)
    fetchBeers(query, page)
      .then((data) => {
        if (data.length < BEER_PER_PAGE) {
          setHasMoreData(false)
        }
        if (data.length) {
          const newBeers = checkFavourites(data);
          setBeers((prevBeers) => [...prevBeers, ...newBeers]);
          setPage((prevPage) => prevPage + 1);
          setHasMoreData(true)
        }
        setLoading(false)
      })
      .catch((error) => console.error("Error fetching beers:", error));
  }


  useEffect(() => {
    fetchData()
  }, [query]);

  useEffect(() => {
    const favoriteBears = getFavourites()
    console.log("here.favoriteBears...", favoriteBears)
    setFavorites(favoriteBears);
  }, []);

  const handleSearch = (searchQuery = "") => {
    console.log("Searching....", searchQuery);
    setQuery((prevState) => searchQuery);
    setPage(1);
    setBeers((prevBeers) => []);
  };

  const handleToggleFavorite = (id) => {
    const updatedBeers = beers.map((beer) =>
      beer.id === id ? { ...beer, favourite: !beer.favourite } : beer
    );
    setBeers(updatedBeers);

    const updatedFavorites = updatedBeers.filter((beer) => beer.favourite);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  const handleRemoveFavorite = (id) => {
    const updatedBeers = beers.map((beer) =>
      beer.id === id ? { ...beer, favourite: false } : beer
    );
    setBeers(updatedBeers);

    const updatedFavorites = updatedBeers.filter((beer) => beer.favourite);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  const reset = () => {
    if (query !== "") {
      setQuery("");
      setPage(1);
      setBeers((prevBeers) => []);
    }
  }

  return (
    <>
      <NavBar onSearch={handleSearch} searchItem={query} reset={reset} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="home"
          element={
            <Home
              beers={beers}
              onToggleFavorite={handleToggleFavorite}
              page={page}
              loadData={fetchData}
              hasMore={hasMore}
              loading={loading}
            />
          }
        />
        <Route
          path="favorites"
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
