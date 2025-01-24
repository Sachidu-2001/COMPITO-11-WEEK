import { Container, Row, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useEffect, useState } from "react";

function AppleNew() {
  const [music, setMusic] = useState([]);

  useEffect(() => {
  const collectCards = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
      );
      const data = await response.json();
      setMusic(data.data ? data.data.slice(0,8) : []);
    } catch (error) {
      console.error("La musica non ci sarà", error);
    }s
  };
  collectCards()
}, [])


  return (
    <Container fluid className="bg-black">
      <h2 className="text-white">
        Nuove uscite <Icon.ChevronRight />
      </h2>
      <Row>
        {music.map((song, index) => (
          <Col key={index} >
            <div>
              <div className="me-3">
                <img
                  src={song.album.cover}
                  style={{ height: "13em" }}
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
