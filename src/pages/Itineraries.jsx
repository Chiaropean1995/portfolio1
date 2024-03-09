
import { Container, Col, Nav, Navbar, Row, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext";
import { ItineraryContext } from "../contexts/ItineraryContext";
import "../App.css"





export default function AddItineraries() {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const itineraries = useContext(ItineraryContext).itineraries;
  const addItinerary = useContext(ItineraryContext).addItinerary;



  const logout = () => {
    setToken(null);
    navigate("/loginpage");
  };

  const deleteItinerary = (id) => {
    addItinerary((prevItineraries) =>
      prevItineraries.filter((itinerary) => itinerary.id !== id))
  }

  return (
    <>
      <Navbar bg="light" variant="light" expand="md" fixed="top"   >
        <Container>
          <Navbar.Brand as={Link} to="/"> TripPlanPro</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="custom-nav-link" as={Link} to="/home">Home</Nav.Link>
              <Nav.Link className="custom-nav-link" as={Link} to="/additinerary">Add Itinerary</Nav.Link>
              <Nav.Link className="custom-nav-link1" onClick={logout} to="/">
                <i className="bi bi-box-arrow-right" style={{ fontSize: "1.5rem" }}></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='container' style={{ paddingTop: '80px' }}>
        <h1 className="my-33 text-center font-weight-bold text-uppercase text-primary text-white">My Travel Itinerary</h1>
        <Row>
          <CardGroup itineraries={itineraries} deleteItinerary={deleteItinerary} />
        </Row>
      </div>
    </>
  );
}

function CardGroup({ itineraries, deleteItinerary }) {
  const [countdowns, setCountdowns] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const newCountdowns = itineraries.map((itinerary) => {
        const endDate = new Date(itinerary.date);
        const dayDifference = endDate - now;
        const days = Math.ceil(dayDifference / (1000 * 60 * 60 * 24));
        return days;
      });
      setCountdowns(newCountdowns);
    }, 1000);

    return () => clearInterval(interval);
  }, [itineraries]);

  return (
    <>
      {itineraries.map((itinerary) => (
        <Col md={4} key={itinerary.id}>
          <Card className="custom-card my-3" style={{ border: '2px solid black' }}>
            <Card.Body>
              <Card.Header className="text-center">
                {itinerary.date}
              </Card.Header>
              <Card.Title className="text-center">
                {itinerary.name}
              </Card.Title>
              <Card.Text className="text-white">
                {itinerary.description}
              </Card.Text>
              <Card.Text className="text-center">
                {itinerary.location}
              </Card.Text>
              <Card.Text className="text-center" style={{ borderTop: '1px solid grey' }}>
                <span>Days until:</span>
                <span style={{ color: countdowns < 10 ? 'red' : 'green' }}>{countdowns} days</span>
              </Card.Text>
              <Button variant="transparent" onClick={() => deleteItinerary(itinerary.id)}>
                <i className="bi bi-trash3 text-white" style={{ position: 'absolute', right: '30px', bottom: '20px' }}></i>
              </Button>
              <Button variant="transparent" as={Link} to={`/edititinerary/${itinerary.id}`}>
                <i className="bi bi-pencil-square text-white" style={{ position: 'absolute', right: '70px', bottom: '18px' }}></i>
              </Button>
            </Card.Body>
          </Card>
        </Col >
      ))
      }
    </>
  );
}

