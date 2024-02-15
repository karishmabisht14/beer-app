import React from "react";
import BeerCard from "./BeerCard";
import { Col, Container, Row } from "react-bootstrap";

const Favorites = ({ favorites, onRemoveFavorite }) => {
  return (
    <Container>
      <h2>{favorites.length !== 0 ? "Favorites" : "No favorites is added"}</h2>
        <Row>
          {favorites.map((beer) => (
            <Col lg={3} key={beer.id}>
              <BeerCard
                beer={beer}
                onToggleFavorite={onRemoveFavorite}
              />
            </Col>
          ))}
        </Row>
    </Container>
  );
};

export default Favorites;
