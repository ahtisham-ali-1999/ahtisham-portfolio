// src/components/HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "./../../hero-image.jpg"; // optional image

const HeroSection = () => {
  return (
    <section className="py-5 hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Text Column */}
          <div className="col-md-6">
            <h2>Hi, I am</h2>
            <h1 className="display-4 fw-bold">Ahtisham Ali</h1>
            <p className="lead text-muted">
              Website Developer especialized in developing and maintaining <strong>Magento 2</strong> and <strong>WordPress</strong> Websites.
            </p>
            <Link to="/projects" className="btn btn-outline-dark btn-medium mt-3">
              Explore Projects
            </Link>
          </div>
          {/* Image Column */}
          <div className="col-md-6 text-center d-none d-md-block">
            <img
              src={HeroImage}
              alt="Hero"
              className="img-fluid rounded-3 shadow-sm mt-4 mt-md-0"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
