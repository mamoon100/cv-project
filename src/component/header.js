import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../img/cv.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} width="auto" height="30px" alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/">
              Cv
            </Nav.Link> */}
            <Nav.Link as={Link} to="/about-me">
              About me
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
