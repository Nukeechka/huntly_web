import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container className="py-5">
      <h2 className="fw-bold text-center">Contact Us</h2>
      <p className="text-center text-muted mb-5">
        We’re Here to Help! Have questions or need assistance? Get in touch with
        us.
      </p>

      <Form>
        <Row className="mb-4">
          <Col md={4}>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number (optional)</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Type your message here"
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" className="px-4">
            Leave us a Message →
          </Button>
        </div>
      </Form>

      <div className="mt-5 text-center">
        <h5 className="fw-bold">How to Reach Us:</h5>
        <p className="text-muted mb-1">Email: support@huntly.kz</p>
        <p className="text-muted mb-1">Phone: +7 (727) 123-4567</p>
        <p className="text-muted">Address: 050000, Almaty, Abay Avenue, 10</p>
      </div>
    </Container>
  );
};

export default ContactUs;
