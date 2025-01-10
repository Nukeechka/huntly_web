import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="text-primary fw-bold">Huntly</h5>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/about-us" className="text-decoration-none text-dark">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/career-advice"
                  className="text-decoration-none text-dark"
                >
                  Career Advice
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/internships"
                  className="text-decoration-none text-dark"
                >
                  Internships
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/resume" className="text-decoration-none text-dark">
                  Resume
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-decoration-none text-dark">
                  Find Job
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact-us"
                  className="text-decoration-none text-dark"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="example@gmail.com"
                  aria-label="Email"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                <i className="bi bi-send"></i>
              </button>
            </form>
            <p className="text-muted mt-2">
              Join our newsletter to stay up to date on features and releases
            </p>
          </div>
        </div>
        <hr />
        <div className="d-md-flex justify-content-between align-items-center mt-3">
          <p className="text-muted mb-2 mb-md-0">
            © 2024 Huntly. All rights reserved.{" "}
            <Link
              to="/privacy-policy"
              className="text-decoration-none text-dark"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              to="/terms-of-service"
              className="text-decoration-none text-dark"
            >
              Terms of Service
            </Link>
          </p>
          <div>
            <a href="#" className="text-dark me-3">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="text-dark me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-dark me-3">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-dark">
              <i className="bi bi-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
