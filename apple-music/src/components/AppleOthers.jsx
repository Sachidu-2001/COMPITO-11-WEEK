import { Button, Container, Col,Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function AppleOthers() {
  return (
    <Container fluid className="bg-black">
      <h2 className="text-white">Altro da esplorare</h2>
      <div>
        <Row>
        <Col lg={4}>
          <Button
            variant="dark"
            className="fs-3 py-4 mb-3 w-100 d-flex justify-content-between text-danger"
          >
            Esplora per genere <Icon.ChevronRight className="my-auto" />{" "}
          </Button>
        </Col>
        <Col lg={4} >
          <Button
            variant="dark"
            className="fs-3 py-4 mb-3 w-100 d-flex justify-content-between text-danger"
          >
            Decenni <Icon.ChevronRight className="my-auto" />{" "}
          </Button>
        </Col>
        <Col lg={4} >
          <Button
            variant="dark"
            className="fs-3 py-4 mb-3 w-100 d-flex justify-content-between text-danger"
          >
            Attivià e stati d'animo <Icon.ChevronRight className="my-auto" />{" "}
          </Button>
        </Col>
        </Row>
        <Row>
        <Col lg={4}>
          <Button
            variant="dark"
            className="fs-3 py-4 mb-3 w-100 d-flex justify-content-between text-danger"
          >
            Worldwide <Icon.ChevronRight className="my-auto" />{" "}
          </Button>
        </Col>
        <Col lg={4}>
          <Button
            variant="dark"
            className="fs-3 py-4 mb-3 w-100 d-flex justify-content-between text-danger"
          >
            Classifiche <Icon.ChevronRight className="my-auto" />{" "}
          </Button>
        </Col>
        <Col lg={4}>
          <Button
            variant="dark"
            className="fs-3 py-4 mb-3 w-100 d-flex justify-content-between text-danger"
          >
            Audio spaziale <Icon.ChevronRight className="my-auto" />{" "}
          </Button>
        </Col>
        </Row>
        <Row>
        <Col lg={4}>
          <Button
            variant="dark"
            className="fs-3 py-4 mb-3 w-100 d-flex justify-content-between text-danger"
          >
            Video musicali <Icon.ChevronRight className="my-auto" />{" "}
          </Button>
        </Col>

        <Col lg={4}>
          <Button
            variant="dark"
            className="fs-3 py-4 mb-3 w-100 d-flex justify-content-between text-danger"
          >
            Nuovi artisti <Icon.ChevronRight className="my-auto" />{" "}
          </Button>
        </Col>

        <Col lg={4}>
          <Button
            variant="dark"
            className="fs-3 py-4 mb-3 w-100 d-flex justify-content-between text-danger"
          >
            Hit del passato <Icon.ChevronRight className="my-auto" />{" "}
          </Button>
        </Col>
        </Row>
      </div>
      &nbsp;
    </Container>
  );
}

export default AppleOthers;
