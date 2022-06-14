import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  FormControl,
  InputGroup,
  Form,
  Alert
} from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn,googleSignIn} = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, pass);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn=async(e)=>{
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <Container fluid style={{ marginTop: 100 }}>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Col xs lg={3} md={5} sm={8}>
            <h2 style={{ textAlign: "center" }}>Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <InputGroup
              className="mb-1"
              size="lg"
              bsPrefix="string"
              style={{ marginTop: 20 }}
            >
              <FormControl
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup
              className="mb-1"
              size="lg"
              bsPrefix="string"
              style={{ marginTop: 8 }}
            >
              <FormControl
                placeholder="Password"
                aria-label="Password"
                type="password"
                aria-describedby="basic-addon1"
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
            <Button
              className="mb-1"
              variant="primary"
              type="submit"
              style={{ marginTop: 8, width: "100%" }}
            >
              Login
            </Button>
            <GoogleButton
              style={{ width: "100%", marginTop: "8px", height: "50px" }}
              onClick={handleGoogleSignIn}
            />
            <p style={{ textAlign: "center", marginTop: "8px" }}>
              Don't have an account? <Link to="/signup">Signup</Link>
            </p>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Login;
