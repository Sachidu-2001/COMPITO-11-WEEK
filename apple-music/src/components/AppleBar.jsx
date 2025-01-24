import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MusicLogo from '../assets/logos/music.svg'

function AppleBar() {
  return (
    <Navbar expand="lg" className="bg-warning">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Novità</Nav.Link>
            <Nav.Link href="#link">Radio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home" className="m-auto text-white"><img src={MusicLogo}/></Navbar.Brand>
        <p className="h3 my-auto">Accedi</p>
        
      </Container>
    </Navbar>
  );
}

export default AppleBar;
