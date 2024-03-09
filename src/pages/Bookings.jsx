import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import "../App.css"



export default function Booking() {
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
              <Nav.Link className="custom-nav-link1" onClick={logout} to="/">
                <i className="bi bi-box-arrow-right" style={{ fontSize: "1.5rem" }}></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >

      <div className="container" style={{ zIndex: '1' }}>
        <h2 className="text-center my-3" style={{ zIndex: '1' }}> My Bookings</h2>
        <Link to="/addbooking" className='btn btn-primary my-3' style={{ zIndex: '1', display: 'block', width: '100%', maxWidth: '200px', margin: '0 auto', textAlign: 'center', marginBottom: '20px', padding: '10px', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>Add +</Link>
        <table className="custom-table">
          <thead >
            <tr>
              <th>Booking Name</th>
              <th>Booking Date</th>
              <th>Booking Status</th>
              <th>Payment Information</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div >
    </>
  );
}
