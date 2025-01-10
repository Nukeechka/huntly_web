import React, { useState } from "react";
import { Modal, Button, Form, Badge, Container } from "react-bootstrap";

const SubscribeModal = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", field: "" });
  const fields = [
    "Marketing",
    "IT",
    "Finance & Accounting",
    "Design & Creative",
    "Engineering & Technology",
  ];

  // Handlers to open and close the modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle field selection
  const handleFieldSelect = (field) => {
    setFormData((prevData) => ({ ...prevData, field }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    handleClose(); // Close the modal after submission
  };

  return (
    <Container className="text-center">
      {/* Subscribe Button */}
      <Button variant="primary" onClick={handleShow}>
        Subscribe Now
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Subscribe to Updates</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Name Input */}
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

            {/* Email Input */}
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

            {/* Choose Field */}
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

            {/* Submit Button */}
            <Button type="submit" variant="primary" className="w-100">
              Send
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default SubscribeModal;
