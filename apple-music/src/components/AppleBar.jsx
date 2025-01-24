import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AppleLogo from '../assets/logos/'

function AppleBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Novità</Nav.Link>
            <Nav.Link href="#link">Radio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">AppleMusic</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default AppleBar;
