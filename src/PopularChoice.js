import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import photo from "./assets/choice.png";
import "./PopularChoice.css";

const PopularChoice = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5">
      <div className="row align-items-center gy-4">
        <div
          className="col-md-6 text-center text-md-start"
          data-aos="fade-right"
        >
          <h2 className="fw-bold mb-3">
            Why Huntly Is the Most Popular Choice
          </h2>
          <p className="text-muted">
            Huntly has become the go-to platform for job seekers worldwide.
            Here's why professionals trust us to take the next step in their
            careers:
          </p>
          <div
            className="d-flex flex-column flex-md-row flex-wrap justify-content-center justify-content-md-start gap-3 mt-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="d-flex align-items-center">
              <i className="bi bi-briefcase-fill me-2 fs-4"></i>
              <span>Quality Job</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-building me-2 fs-4"></i>
              <span>Top Companies</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-cash-stack me-2 fs-4"></i>
              <span>No Extra Charge</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-globe me-2 fs-4"></i>
              <span>International Job</span>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 text-center position-relative"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="position-relative d-inline-block">
            <img
              src={photo}
              alt="Trusted Professional"
              className="img-fluid rounded w-100"
              style={{ maxWidth: "400px" }}
            />
            <div className="position-absolute badge-trusted bg-white text-dark px-3 py-1 rounded-pill shadow-sm">
              <i className="bi bi-shield-check-fill me-2 text-success"></i>
              100% Trusted
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularChoice;
