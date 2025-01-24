import Container from "react-bootstrap/esm/Container";
import ChillImg from "../assets/images/1a.png";
import MusicOne from "../assets/images/1b.png";
import First from '../assets/images/2a.png'
import Second from '../assets/images/2b.png'
import Third from '../assets/images/2c.png'
import Fourth from '../assets/images/2d.png'
import Fifth from '../assets/images/2e.png'
import Sixth from '../assets/images/2f.png'
import * as Icon from 'react-bootstrap-icons'

function AppleNovita() {
  return (
    <Container fluid className="pt-5 bg-black">
      <div>
        <h2 className="display-4 fw-bold text-white">Novità</h2>
        <hr className="text-white" />
        <div className="d-flex">
          <div>
            <h4 className="text-secondary fw-bold">NUOVA STAZIONE RADIO</h4>
            <h6 className="text-white h3 w-75">
              Rilassati, al resto ci pensiamo noi. Ascolta Apple Music Chill
            </h6>
            <div>
              <img
                src={ChillImg}
                style={{ height: "18em" }}
                className="rounded-4"
              />
            </div>
          </div>
          <div className="ms-3">
            <h4 className="text-secondary fw-bold">NUOVA STAZIONE RADIO</h4>
            <h6 className="text-white h3 w-75">
              Ecco la nuova casa della musica latina
            </h6>
            <div>
              <img
                src={MusicOne}
                style={{ height: "18em" }}
                className="rounded-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 py-3">
        <h2 className="text-white">Nuovi episodi radio <Icon.ChevronRight /> </h2>
        <div className="d-flex">
            <div className="me-3">
                <img src={First} style={{height:'13em'}}  className="rounded-4"/>
                <h4 className="text-white pt-2">Pròlogo con Abuelo</h4>
            </div>
            <div className="me-3">
                <img src={Second} style={{height:'13em'}}  className="rounded-4"/>
                <h4 className="text-white pt-2">The Wanderer</h4>
            </div>
            <div>
                <img src={Third} style={{height:'13em'}}  className="rounded-4"/>
                <h4 className="text-white pt-2">Michael Bublè & Carly Pearce</h4>
            </div>
            <div>
                <img src={Fourth} style={{height:'13em'}}  className="rounded-4"/>
                <h4 className="text-white pt-2">Michael Bublè & Carly Pearce</h4>
            </div>
            <div>
                <img src={Fifth} style={{height:'13em'}}  className="rounded-4"/>
                <h4 className="text-white pt-2">Michael Bublè & Carly Pearce</h4>
            </div>
        </div>
      </div>
    </Container>
  );
}

export default AppleNovita;
