import { Container } from "react-bootstrap";
import First from "../assets/images/2a.png";
import * as Icon from "react-bootstrap-icons";

function ApplePlayer() {
  return (
    <Container fluid className="bg-dark">
      <div className="d-flex justify-content-between py-2">
        <div>
          <img src={First} style={{ height: "5.5em" }} className="rounded-4"/>
        </div>
        <div className="d-flex align-items-center">
          <Icon.PlayFill className="display-1 text-secondary me-4" />
          <Icon.FastForwardFill className="display-3 text-secondary" />
        </div>
      </div>
    </Container>
  );
}

export default ApplePlayer;
