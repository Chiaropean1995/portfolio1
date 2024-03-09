import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { ItineraryContext } from "./contexts/ItineraryContext";
import RequireAuth from "./components/RequireAuth";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import BucketList from "./pages/BucketList";
import Itineraries from "./pages/Itineraries";
import Bookings from "./pages/Bookings";
import useLocalStorage from "use-local-storage";
import AddItinerary from "./pages/AddItinerary";
import EditItinerary from "./pages/EditItinerary";
import backgroundvideo from "./assets/backgroundvideo.mp4";
import "./App.css"


function Layout() {
  return (
    <>
      <Navbar bg="light" variant="light" expand="md" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/"> TripPlanPro</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link className="custom-nav-link" as={Link} to="/loginpage">
              <i className="bi bi-box-arrow-in-right" style={{ fontSize: "1.5rem" }}></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar >
    </>
  );
}

export default function App() {
  const [token, setToken] = useLocalStorage("token", null);
  const [itineraries, addItinerary] = useLocalStorage("itineraries", []);
  return (
    <>
      <AuthContext.Provider value={{ token, setToken }}>
        <ItineraryContext.Provider value={{ itineraries, addItinerary }}>
          <BrowserRouter>
            <video autoPlay loop muted className="background-video">
              <source src={backgroundvideo} type="video/mp4" />
            </video>
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/loginpage" element={<LoginPage />} />
              <Route path="/home" element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              } />
              <Route path="/additinerary" element={
                <RequireAuth>
                  <AddItinerary />
                </RequireAuth>
              } />
              <Route path="/itineraries" element={
                <RequireAuth>
                  <Itineraries />
                </RequireAuth>
              } />
              <Route path="/edititinerary/:id" element={
                <RequireAuth>
                  <EditItinerary />
                </RequireAuth>
              } />
              <Route path="/bookings" element={
                <RequireAuth>
                  <Bookings />
                </RequireAuth>
              } />
              <Route path="/bucketlist" element={
                <RequireAuth>
                  <BucketList />
                </RequireAuth>
              } />
            </Routes>
          </BrowserRouter>
        </ItineraryContext.Provider>
      </AuthContext.Provider >
    </>
  )
}