import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  function login() {
    const isCorrectUsername = username === "wc_chia@hotmail.com";
    const isCorrectPassword = password === "password";
    if (isCorrectUsername && isCorrectPassword) {
      authContext.setToken("1234");
      navigate("/home");
    } else {
      setError("Incorrect email or password.");
    }
  }


  //the event will be trigger when Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      login();
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

      <Container className="login-form-container" style={{ width: '500px', border: '1px solid #ccc', padding: '20px', backgroundColor: 'transparent', borderRadius: '8px', boxShadow: '0px 0px 10px 10px rgba(0,0,0,0.5)',backgroundColor: 'rgba(255, 255,255, 0.2)' }}>
        <i className="bi bi-person-circle d-flex justify-content-center" style={{ fontSize: '10rem' }}></i>
        <h1 className="my-3 d-flex justify-content-center">Login</h1>
        <Form className="d-flex justify-content-center align-items-center flex-column p-4 border-top">
          <Form.Group className="mb-3 position-relative" controlId="username">
            <Form.Label>
              <i className="bi bi-envelope" style={{ position: 'absolute', right: '8px', top: '50%', fontSize: '18px' }}></i>
            </Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="email"
              placeholder="Email Address"
              style={{ width: '400px', backgroundColor: 'rgba(0, 0,0, 0.2)' }}
              onKeyPress={handleKeyPress}
            />
          </Form.Group>

          <Form.Group className="mb-3 position-relative" controlId="password">
            <Form.Label>
              <i className="bi bi-lock" style={{ position: 'absolute', right: '8px', top: '50%', fontSize: '18px' }}></i>
            </Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              style={{ width: '400px', backgroundColor: 'rgba(0, 0,0, 0.2)' }}
              onKeyPress={handleKeyPress}
            />
          </Form.Group>
          {error && <div className="text-danger mb-3">{error}</div>}
          <Button variant="primary" style={{ width: '300px', borderRadius: '20px' }} onClick={login}>
            Login
          </Button>
        </Form>
      </Container>
    </div >
  );
}
