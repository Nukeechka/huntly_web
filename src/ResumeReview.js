import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import resume from "./assets/resume.jpg";

const ResumeReview = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    alert(`File selected: ${e.target.files[0].name}`);
  };

  const signs = [
    "You're not getting responses to your job applications.",
    "You haven't updated your resume in a while.",
    "You're unsure how to highlight your strengths.",
    "You don't know how to use keywords.",
    "You're not sure what to include or leave out.",
  ];

  return (
    <Container className="py-5" style={{ maxWidth: "1120px" }}>
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <h2 className="fw-bold">Free resume review service</h2>
          <p className="text-muted">Get a free, confidential resume review.</p>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                hidden
              />
              <Button
                variant="primary"
                className="px-4"
                onClick={() => document.getElementById("formFile").click()}
              >
                Select file
              </Button>
            </Form.Group>
          </Form>
        </Col>
        <Col md={6}>
          <img
            src={resume}
            alt="Resume Feedback"
            className="img-fluid rounded"
          />
        </Col>
      </Row>

      <h3 className="fw-bold">Six signs you need a resume review</h3>
      <ul className="list-unstyled mt-4">
        {signs.map((sign, index) => (
          <li key={index} className="d-flex align-items-start mb-3">
            <div
              className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
              style={{
                width: "35px",
                height: "35px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              {index + 1}
            </div>
            <p className="ms-3 mb-0">{sign}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ResumeReview;
