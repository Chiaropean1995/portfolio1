import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import "../App.css"





export default function BucketList() {
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
      <div className="container">
        <h2 className="text-center text-white my-3"> My Bucket List</h2>
        <Link to="/addbucketlist" className='btn btn-primary my-3' style={{ display: 'block', width: '100%', maxWidth: '200px', margin: '0 auto', textAlign: 'center', marginBottom: '20px', padding: '10px', textDecoration: 'none' }}>Add +</Link>
        <table className='custom-table'>
          <thead>
            <tr>
              <th>Destination</th>
              <th>Date Added</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </>
  );
}

