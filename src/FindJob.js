import React from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const jobs = [
  {
    title: "Project Manager",
    type: "Full Time",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    location: "Almaty, Kazakhstan",
    salary: "$5000-$6000/month",
  },
  {
    title: "Product Designer",
    type: "Full Time",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    location: "Astana, Kazakhstan",
    salary: "$3000-$5000/month",
  },
  {
    title: "Front End Developer",
    type: "Part Time",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    location: "San Jose, USA",
    salary: "$4000-$5000/month",
  },
];

const FindJob = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleApplyNow = () => {
    navigate("/job-details"); // Navigate to JobDetails page
  };

  return (
    <div className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <Container>
        <h2 className="fw-bold mb-4">Find Job</h2>
        <Form className="mb-4">
          <Row className="g-2 align-items-center">
            <Col md={6}>
              <InputGroup>
                <Form.Control type="text" placeholder="Job title, Keyword..." />
                <Button variant="outline-secondary">
                  <i className="bi bi-search"></i>
                </Button>
              </InputGroup>
            </Col>
            <Col md={2}>
              <Form.Select>
                <option>Filter</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Remote</option>
              </Form.Select>
            </Col>
            <Col md={2}>
              <Button variant="primary" className="w-100">
                Find Job
              </Button>
            </Col>
          </Row>
        </Form>
        <div className="job-listings">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-between p-3 mb-3 bg-white rounded shadow-sm"
            >
              <div className="d-flex align-items-center">
                <img
                  src={job.companyLogo}
                  alt={job.title}
                  style={{ width: "50px", height: "50px" }}
                  className="me-3 rounded"
                />
                <div>
                  <h5 className="fw-bold mb-1">{job.title}</h5>
                  <p className="text-muted mb-0">
                    {job.location} - {job.salary}
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column align-items-end">
                <span
                  className={`badge bg-${
                    job.type === "Full Time" ? "primary" : "secondary"
                  } mb-2`}
                >
                  {job.type}
                </span>
                <Button variant="outline-primary" onClick={handleApplyNow}>
                  Apply Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FindJob;
