import React from "react";
import BeerCard from "./BeerCard";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = ({ beers, onToggleFavorite, onScrollPage, page }) => {
  const handleScroll = () => {
    onScrollPage(page + 1);
  };
  return (
    <InfiniteScroll
      dataLength={beers.length}
      next={handleScroll}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      {beers.map((beer) => (
        <div className="d-flex justify-content-center">
          <BeerCard
            key={beer.id}
            beer={beer}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default Home;
