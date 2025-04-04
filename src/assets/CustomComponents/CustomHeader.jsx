import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Col, Row } from "react-bootstrap";

function CustomHeader() {
  return (
    <Navbar expand="lg" className="bg-black mb-5">
      <Container className=" m-0">
        <Navbar.Brand>
          <img
            style={{ width: "100px" }}
            src="public\netflix_logo.png"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white " href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              TvShows
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Movies
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Recently Added
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              My List
            </Nav.Link>
            {/*<NavDropdown className="text-white" title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomHeader;
