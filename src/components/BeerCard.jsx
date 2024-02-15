import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BeerCard = ({ beer, onToggleFavorite }) => {
  const { name, description, image_url, id, favorite } = beer;

  return (
    <Card style={{ maxWidth: "40rem" }}>
      <Row>
        <Col lg={4} style={{ margin: "auto", textAlign: "center" }}>
          <Card.Img
            variant="left"
            src={image_url}
            alt={name}
            fluid={true}
            style={{ maxWidth: "60px" }}
          />
        </Col>
        <Col lg={8}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary" onClick={() => onToggleFavorite(id)}>
              {favorite ? "Remove from Favorites" : "Add to Favorites"}
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default BeerCard;
