import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MusicLogo from "../assets/logos/music.svg";

function AppleBar() {
  return (
    <Navbar
      expand="lg"
      className="bg-warning py-3 d-flex align-items-lg-start "
    >
      <Container className="d-flex flex-lg-column-reverse">
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex flex-column ">
              <input placeholder="Cerca"/>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Novità</Nav.Link>
              <Nav.Link href="#link">Radio</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>

        <Navbar.Brand href="#home" className="m-auto ms-lg-2">
          <img src={MusicLogo} /> <br />
        </Navbar.Brand>
        <p className="h3 my-auto d-lg-none">Accedi</p>
      </Container>
    </Navbar>
  );
}

export default AppleBar;
