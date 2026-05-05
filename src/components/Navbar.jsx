// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import Logo from './../../ah-logo.png';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="container-fluid py-2">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-6">
              <Link className="navbar-brand" to="/">
                <img src={Logo} alt="My Logo" style={{ height: '60px' }} />
              </Link>
            </div>
            <div className="col-6 col-sm-6 col-6">
              <div className="d-flex justify-content-end">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav gap-4">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">
                    Projects
                  </Link>
                </li>
                <li className="nav-item contact">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </nav >
  );
};

export default Navbar;
