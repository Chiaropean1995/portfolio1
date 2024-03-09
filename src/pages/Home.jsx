import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import "../App.css"



export default function Home() {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    setToken(null);
    navigate("/loginpage");
  };
  return (
    <>
      <Navbar bg="light" variant="light" expand="md" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/"> TripPlanPro</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="custom-nav-link" as={Link} to="/home">Home</Nav.Link>
              <Nav.Link className="custom-nav-link" as={Link} to="/itineraries">Itinerary</Nav.Link>
              <Nav.Link className="custom-nav-link" as={Link} to="/bookings">Documents and Bookings</Nav.Link>
              <Nav.Link className="custom-nav-link" as={Link} to="/bucketlist">Bucket List</Nav.Link>
              <Nav.Link className="custom-nav-link1" onClick={logout} to="/">
                <i className="bi bi-box-arrow-right" style={{ fontSize: "1.5rem" }}></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
      <div className="container" style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <h1 className="text-center display-4" style={{ zIndex: '1' }}>Welcome to TripPlanPro</h1>
        <p className="text-center" style={{ fontSize: '1.5rem', zIndex: '1' }}>
          Plan your next vacation with ease! Keep track of your itineraries, packing lists, documents, and more.
        </p>
      </div>

      <Outlet />
    </>
  );
}
