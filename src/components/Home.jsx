import React from "react";
import HeroSection from "./Herosection";
import projectData from "../data/projectData";
import { Link } from "react-router-dom";
import HtmlLogo from './../assets/html-logo.png';
import MagentoLogo from './../assets/magento-logo.png';
import WordPressLogo from './../assets/wordpress-logo.png';
import JqueryLogo from './../assets/jquery-logo.png';
const Home = () => {
  const featuredProjects = projectData.slice(0, 4); // Only first 4 projects

  return (
    <>
      <HeroSection />
      <div className="container about-me my-5">
        <h3 className="text-center mb-5">About me</h3>
        <div className="row g-4">
          <p className="mb-2">I am a passionate and skilled web developer with a strong command of JavaScript, PHP, and Magento. With several years of hands-on experience, I've had the opportunity to build, customize, and optimize websites and web applications across a variety of industries. My focus has always been on writing clean, maintainable code and delivering solutions that are both scalable and user-centric.</p>
          <h3 className="mb-2 text-center">My Skills</h3>
          <div className="col-md-3 col-6">
            <div className="img-card">
              <img src={HtmlLogo} alt="html-log"></img>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="img-card">
              <img src={MagentoLogo} alt="magento-log"></img>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="img-card">
              <img src={WordPressLogo} alt="wp-log"></img>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="img-card">
              <img src={JqueryLogo} alt="jquery-log"></img>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <Link to="/about" className="btn btn-outline-dark">
            Read More
          </Link>
        </div>
      </div>
      <div className="container projects my-5">
        <h3 className="text-center mb-5">My Projects</h3>
        <div className="row g-4">
          {featuredProjects.map((project, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: "150px", objectFit: "cover", backgroundColor: "#fff" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text" style={{ fontSize: "0.9rem" }}>
                    {project.description}
                  </p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/projects" className="btn btn-outline-dark">
            View All Projects
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
