import React from "react";
import BeerCard from "./BeerCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";

const Home = ({ beers, onToggleFavorite, loadData, hasMore, loading }) => {
  return (
    <Container style={{ textAlign: "center" }}>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!loading && beers.length === 0 && (
        <Alert variant="danger">
          There is some issue fetching the beer(s) data!
        </Alert>
      )}
      {beers.length > 0 && (
        <InfiniteScroll
          dataLength={beers.length}
          next={loadData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <Row>
            {beers.map((beer) => (
              <Col
                xxl={3}
                lg={4}
                md={6}
                sm={12}
                className="d-flex justify-content-center"
                key={beer.id}
              >
                <BeerCard beer={beer} onToggleFavorite={onToggleFavorite} />
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      )}
    </Container>
  );
};

export default Home;
