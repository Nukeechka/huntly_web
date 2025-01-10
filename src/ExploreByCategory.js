import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

const categories = [
  { icon: "bi bi-brush", title: "Design", jobs: 235 },
  { icon: "bi bi-bar-chart", title: "Sales", jobs: 756 },
  { icon: "bi bi-megaphone", title: "Marketing", jobs: 140 },
  { icon: "bi bi-wallet2", title: "Finance", jobs: 325 },
  { icon: "bi bi-laptop", title: "Technology", jobs: 436 },
  { icon: "bi bi-code-slash", title: "Engineering", jobs: 542 },
  { icon: "bi bi-briefcase", title: "Business", jobs: 211 },
  { icon: "bi bi-people", title: "Human Resource", jobs: 346 },
];

const ExploreByCategory = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4" data-aos="fade-up">
        Explore by <span className="text-primary">category</span>
      </h2>
      <div className="row g-4">
        {categories.map((category, index) => (
          <div
            className="col-md-3 col-sm-6"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`} // Delay for staggered effect
          >
            <div className="card border-0 shadow-sm text-center p-3">
              <div className="mb-3">
                <i className={`${category.icon} text-primary fs-2`}></i>
              </div>
              <h5 className="fw-bold">{category.title}</h5>
              <p className="text-muted">
                {category.jobs} jobs available{" "}
                <i className="bi bi-arrow-right"></i>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreByCategory;
