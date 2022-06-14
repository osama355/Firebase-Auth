import React, { useState } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  FormControl,
  InputGroup,
  Form,
  Alert,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container fluid style={{ marginTop: 100 }}>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Col xs lg={3} md={5} sm={8}>
            <h2 style={{ textAlign: "center" }}>Signup</h2>
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
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="basic-addon1"
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
                type="password"
                aria-label="Password"
                onChange={(e) => setPassword(e.target.value)}
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Button
              type="Submit"
              className="mb-1"
              variant="primary"
              style={{ marginTop: 8, width: "100%" }}
            >
              Signup
            </Button>
            <p style={{ textAlign: "center", marginTop: "8px" }}>
              Already have an account? <Link to="/">Login</Link>{" "}
            </p>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Signup;
