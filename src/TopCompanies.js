import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

const companies = [
  {
    name: "Google",
    location: "Almaty, Kazakhstan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    openPositions: 3,
  },
  {
    name: "Google",
    location: "Almaty, Kazakhstan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    openPositions: 3,
  },
  {
    name: "Google",
    location: "Almaty, Kazakhstan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    openPositions: 3,
  },
  {
    name: "Google",
    location: "Almaty, Kazakhstan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    openPositions: 3,
  },
  {
    name: "Google",
    location: "Almaty, Kazakhstan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    openPositions: 3,
  },
  {
    name: "Google",
    location: "Almaty, Kazakhstan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    openPositions: 3,
  },
];

const TopCompanies = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4" data-aos="fade-up">
        Top companies
      </h2>
      <div className="row g-4">
        {companies.map((company, index) => (
          <div
            className="col-md-4 col-sm-6"
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="card border-0 shadow-sm p-3">
              <div className="d-flex align-items-center mb-3">
                <img
                  src={company.logo}
                  alt={`${company.name} Logo`}
                  className="me-3"
                  style={{ width: "50px", height: "50px" }}
                />
                <div>
                  <h5 className="mb-1">{company.name}</h5>
                  <p className="text-muted mb-0">
                    <i className="bi bi-geo-alt-fill me-1"></i>
                    {company.location}
                  </p>
                </div>
              </div>
              <a href="https://google.com" className="btn btn-primary w-100">
                Open Position ({company.openPositions})
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCompanies;
