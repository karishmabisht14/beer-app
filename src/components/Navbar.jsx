import { Navbar, Nav, Container, Form, Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function NavBar({ onSearch, searchItem, reset }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={reset} style={{ cursor: "pointer" }}>
          Beer App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/favorites">
              Favourites
            </Nav.Link>
          </Nav>
          <Form>
            <Row>
              <Col xs="auto">
                <SearchBar onSearch={onSearch} searchItem={searchItem} />
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
