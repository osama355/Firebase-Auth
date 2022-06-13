import React from "react";
import {
  Container,
  Button,
  Row,
  Col,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import GoogleButton from "react-google-button";
import {Link} from 'react-router-dom';

function Signup() {
  return (
    <Container fluid style={{ marginTop: 100 }}>
      <Row className="justify-content-center">
        <Col xs lg={3} md={5} sm={8}>
          <h2 style={{ textAlign: "center" }}>Login</h2>
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
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Button
            className="mb-1"
            variant="primary"
            style={{ marginTop: 8, width: "100%" }}
          >
            Signup
          </Button>
          <p style={{textAlign:"center", marginTop:"8px"}} >Already have an account? <Link to="/login">Login</Link> </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
