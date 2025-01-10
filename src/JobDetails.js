import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const JobDetails = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <Container>
        <Row className="align-items-center mb-4">
          <Col md={8}>
            <div className="d-flex align-items-center mb-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Company Logo"
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                className="me-3"
              />
              <div>
                <h4 className="fw-bold mb-1">Project Manager</h4>
                <span className="badge bg-primary me-2">Full Time</span>
                <div className="d-flex flex-wrap mt-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted me-3 text-decoration-none"
                  >
                    <i className="bi bi-globe me-1"></i> https://instagram.com
                  </a>
                  <span className="text-muted me-3">
                    <i className="bi bi-telephone me-1"></i> (555) 123-4567
                  </span>
                  <span className="text-muted">
                    <i className="bi bi-envelope me-1"></i> career@instagram.com
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="text-end">
            <Button variant="primary" className="px-4 py-2">
              Apply Now →
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={8}>
            <h5 className="fw-bold mb-3">Job Description</h5>
            <p>
              We are seeking an experienced Project Manager to join our dynamic
              team. The Project Manager will be responsible for leading and
              managing projects from inception to completion, ensuring that they
              are delivered on time, within scope, and within budget. This role
              requires strong leadership, excellent communication skills, and
              the ability to coordinate with various departments to ensure
              project success.
            </p>
            <p>
              This role requires a highly organized and proactive individual who
              can balance multiple priorities and drive projects to completion
              successfully. If you are ready to take on new challenges and
              contribute to the growth of our organization, we encourage you to
              apply!
            </p>

            <h5 className="fw-bold mb-3">Responsibilities</h5>
            <ul>
              <li>
                Develop detailed project plans, including timelines, resource
                allocation, and budgets.
              </li>
              <li>
                Lead and motivate cross-functional teams to achieve project
                goals.
              </li>
              <li>
                Monitor and report on project progress, identifying and
                mitigating any potential risks.
              </li>
              <li>
                Ensure project deliverables meet the required quality standards
                and client expectations.
              </li>
              <li>
                Manage project resources, including personnel, technology, and
                budget.
              </li>
              <li>
                Facilitate regular project meetings, reviews, and post-project
                evaluations.
              </li>
              <li>
                Resolve project-related issues and conflicts in a timely manner.
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold mb-3">Share this job:</h5>
            <div className="d-flex gap-2">
              <Button
                variant="outline-primary"
                className="d-flex align-items-center"
              >
                <i className="bi bi-facebook me-2"></i> Facebook
              </Button>
              <Button
                variant="outline-info"
                className="d-flex align-items-center"
              >
                <i className="bi bi-telegram me-2"></i> Telegram
              </Button>
              <Button
                variant="outline-primary"
                className="d-flex align-items-center"
              >
                <i className="bi bi-linkedin me-2"></i> LinkedIn
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JobDetails;
