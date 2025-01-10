import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
  Badge,
} from "react-bootstrap";
import pwc from "./assets/interships/pwc.jpg";
import kolesa from "./assets/interships/kolesa.jpg";
import ey from "./assets/interships/ey.jpg";
import google from "./assets/interships/google.jpg";
import kpmg from "./assets/interships/kpmg.jpg";
import deloitte from "./assets/interships/deloitte.jpg";

const internships = [
  {
    logo: pwc,
    name: "PWC",
  },
  {
    logo: kolesa,
    name: "Kolesa Group",
  },
  {
    logo: google,
    name: "Google DeepMind",
  },
  {
    logo: ey,
    name: "EY",
  },
  {
    logo: deloitte,
    name: "Deloitte",
  },
  {
    logo: kpmg,
    name: "KPMG",
  },
];

const fields = [
  "Marketing",
  "IT",
  "Finance & Accounting",
  "Design & Creative",
  "Engineering & Technology",
];

const InternshipsSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", field: "" });

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFieldSelect = (field) => {
    setFormData((prevData) => ({ ...prevData, field }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    handleCloseModal();
  };

  return (
    <div className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <Container>
        <h2 className="text-center fw-bold">Internships</h2>
        <p className="text-center text-muted">
          Discover exciting internship opportunities with leading companies
          around the globe.
        </p>

        <Row className="g-4 mb-5">
          {internships.map((company, index) => (
            <Col md={4} sm={6} key={index}>
              <Card className="text-center shadow-sm border-0">
                <Card.Body>
                  <div
                    style={{
                      width: "100%",
                      height: "auto",
                      overflow: "hidden",
                      marginBottom: "1rem",
                    }}
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <Button variant="primary" className="w-100">
                    Apply Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center">
          <h4 className="fw-bold">Stay Updated on Internships</h4>
          <p className="text-muted">
            Subscribe to receive the latest internship opportunities directly to
            your inbox.
          </p>
          <Button variant="primary" className="px-5" onClick={handleOpenModal}>
            Subscribe Now
          </Button>
        </div>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Subscribe to Updates</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Choose Your Field</Form.Label>
              <div className="d-flex flex-wrap gap-2 mt-2">
                {fields.map((field, index) => (
                  <Badge
                    key={index}
                    bg={formData.field === field ? "primary" : "light"}
                    text={formData.field === field ? "white" : "dark"}
                    onClick={() => handleFieldSelect(field)}
                    style={{ cursor: "pointer", padding: "10px 15px" }}
                  >
                    {field}
                  </Badge>
                ))}
              </div>
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100">
              Send
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default InternshipsSection;
