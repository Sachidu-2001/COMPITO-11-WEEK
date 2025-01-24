import { Container } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useState } from "react";

function AppleNew() {
  const [music, SetMusic] = useState();

  const collectCards = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
      );
      const data = await response.json();
    } catch (error) {
      console.error("La musica non ci sarà", error);
    }
  };

  return (
    <Container fluid>
      <h2>
        Nuove uscite <Icon.ChevronRight />
      </h2>
      <Row>
        {music.data.slice(0, 9).map((song, index) => (
          <Col>
            <div>
              <div className="me-3">
                <img
                  src={song.artist.picture}
                  style={{ height: "16em" }}
                  className="rounded-4 me"
                />
                <h4 className="text-white pt-2">{song.title_short}</h4>
                <h6 className="text-white">{song.artist.name} </h6>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AppleNew;
