import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "./Hero.css";
import heroImage from "./assets/hero.png";

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleMouseMove = (e) => {
    const heroImage = document.querySelector(".parallax-image");
    const speed = 5;
    const x = (window.innerWidth - e.pageX * speed) / 150;

    if (heroImage) {
      heroImage.style.transform = `translateX(${x}px)`;
    }
  };

  const handleStartHunt = () => {
    navigate("/find-job");
  };

  return (
    <div className="hero-section" onMouseMove={handleMouseMove}>
      <Container style={{ maxWidth: "1120px" }}>
        <Row className="align-items-center">
          <Col
            md={6}
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            <h1 className="fw-bold">
              Find your dream job <br />
              with <span className="text-primary">Huntly</span>
            </h1>
            <div className="underline">
              The easiest way to discover top opportunities <br />
              and connect with the right employers.
            </div>
            <Button
              variant="primary"
              className="mt-4 px-4 py-2"
              onClick={handleStartHunt}
            >
              Start your hunt today!
            </Button>
          </Col>

          <Col
            md={6}
            className="text-center"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <img
              src={heroImage}
              alt="Hero"
              className="img-fluid parallax-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
