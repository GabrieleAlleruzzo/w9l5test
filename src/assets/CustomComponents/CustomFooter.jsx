import { Col, Row, Container, Navbar } from "react-bootstrap";

function CustomFooter() {
  return (
    <Container sticky="bottom" className="bg-black py-5">
      <Row>
        <Col>
          <img
            style={{ width: "100px" }}
            src="public\netflix_logo.png"
            alt=""
          />
        </Col>
        <Col className="text-white d-flex flex-column align-items-start">
          <h4>Titolo</h4>
          <p className=" text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            veritatis corporis ipsam, doloremque alias mollitia, nobis amet
            porro unde hic dolorem doloribus maiores provident, modi tempore.
            Optio maxime veritatis minus.
          </p>
        </Col>
        <Col className="text-white d-flex flex-column align-items-start">
          <h4>Titolo</h4>
          <p className=" text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            veritatis corporis ipsam, doloremque alias mollitia, nobis amet
            porro unde hic dolorem doloribus maiores provident, modi tempore.
            Optio maxime veritatis minus.
          </p>
        </Col>
        <Col className="text-white d-flex flex-column align-items-start ">
          <h4>Titolo</h4>
          <p className=" text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            veritatis corporis ipsam, doloremque alias mollitia, nobis amet
            porro unde hic dolorem doloribus maiores provident, modi tempore.
            Optio maxime veritatis minus.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default CustomFooter;
