import React, { useState } from "react";

const SearchBar = ({ onSearch, searchItem }) => {
  const [query, setQuery] = useState(searchItem);

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("handleSearch/////", query);
    onSearch(query);
    setQuery("")
  };

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => {setQuery(e.target.value)}}
        placeholder="Search for beers..."
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
};

export default SearchBar;
