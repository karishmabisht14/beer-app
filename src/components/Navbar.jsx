import { Navbar, Nav, Container, Form, Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function NavBar({ onSearch }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container bg>
        <Navbar.Brand href="#home">Beer_App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/favorites">
            Favourites
          </Nav.Link>
        </Nav>
        <Form inline>
          <Row>
            <Col xs="auto">
              <SearchBar onSearch={onSearch} />
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;
