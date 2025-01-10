import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import about from "./assets/about.jpg";

const AboutSection = () => {
  return (
    <div>
      {/* Banner Section */}
      <div style={{ backgroundColor: "#f9f9f9", padding: "50px 0" }}>
        <img
          src={about}
          alt="Banner"
          className="img-fluid"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <Container>
          <h1 className="text-center fw-bold mt-4">About Huntly</h1>
          <p className="text-center text-muted">
            Welcome to Huntly, the premier platform dedicated to helping
            professionals of all levels find their ideal jobs. Whether you're
            just starting your career or looking for your next big opportunity,
            Huntly connects you with top employers, showcases your skills, and
            helps you take the next step in your career journey. Join our
            growing network of talented individuals and forward-thinking
            companies today.
          </p>
        </Container>
      </div>

      {/* Vision Section */}
      <Container className="py-5">
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold">Vision</h2>
            <p className="text-center text-muted">
              Our vision is to provide unparalleled career opportunities for job
              seekers worldwide, empowering individuals to achieve their goals
              and contribute to the global workforce.
            </p>
          </Col>
        </Row>

        {/* Mission Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold">Mission</h2>
            <p className="text-center text-muted">
              Our mission is clear: to connect job seekers with meaningful
              opportunities that inspire growth, foster success, and drive
              personal and professional development.
            </p>
          </Col>
        </Row>

        {/* Who Are We Section */}
        <Row>
          <Col>
            <h2 className="text-center fw-bold">Who are we?</h2>
            <p className="text-center text-muted">
              Huntly was founded in 2024 with the goal of making the job search
              process more efficient and accessible for everyone. Since our
              official launch, Huntly has quickly grown into a dynamic platform
              that bridges the gap between talented professionals and top
              employers. With a focus on innovation, Huntly continues to expand,
              offering job listings, career resources, and networking
              opportunities to support professionals at every stage of their
              career.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
