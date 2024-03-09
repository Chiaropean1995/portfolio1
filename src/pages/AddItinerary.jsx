import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { ItineraryContext } from "../contexts/ItineraryContext"
import { useNavigate } from "react-router-dom";

export default function AddItinerariesForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const { addItinerary, itineraries } = useContext(ItineraryContext)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addItinerary([...itineraries, { id: Date.now(), name, description, date, location }]);
    setName("");
    setDescription("");
    setDate("");
    setLocation("");
    navigate("/itineraries")
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Container style={{ width: '500px', border: '1px solid #ccc', padding: '20px', boxShadow: '0px 0px 10px 10px rgba(0,0,0,0.5)' }}>
          <h1 className="my-3 text-center fw-bold text-white">Add Travel Itinerary</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label className="text-white">Title</Form.Label>
              <Form.Control
                type="text"
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label className="text-white">Description</Form.Label>
              <Form.Control
                type="text"
                value={description}
                as="textarea"
                rows={5}
                placeholder="Enter Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Label className="text-white">Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                placeholder="Enter Date"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="location">
              <Form.Label className="text-white">Location</Form.Label>
              <Form.Control
                type="text"
                value={location}
                placeholder="Enter Location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="primary" className="my-3" style={{ width: '300px', borderRadius: '20px' }} type="submit">
                Add
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
}