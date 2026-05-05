import React from "react";
import SkillProgressBar from "./SkillProgressBar";
import SkillsProgressSection from "./SkillsProgressSection"; // ✅ Add this line

const About = () => {
  return (
    <>
      <div className="container my-5">
        <h2>About Me</h2>
        <p>
          I am a passionate and skilled web developer with a strong command of JavaScript, PHP, and Magento. With several years of hands-on experience, I've had the opportunity to build, customize, and optimize websites and web applications across a variety of industries. My focus has always been on writing clean, maintainable code and delivering solutions that are both scalable and user-centric.
        </p>
        <p>
          Throughout my journey, I've worked on a diverse range of projects—from elegant eCommerce platforms like Seemis Confections, to device trade-in systems like Verkoop Mijn Telefoon, and highly tailored solutions such as Hale Vaping, Relentless Windows, and Mango Creek. These projects have helped me develop a deep understanding of performance optimization, responsive design, third-party integrations, and custom backend development.
        </p>
        <p>
          My clients have consistently appreciated not just the quality of my work, but also my ability to communicate effectively, understand their business needs, and deliver results on time. Whether I’m building from scratch or improving an existing system, I strive to create digital experiences that are intuitive, fast, and impactful.
        </p>
        <p>
          Outside of work, I enjoy exploring new technologies, contributing to open source, and constantly learning to keep up with the ever-evolving web landscape.
        </p>
      </div>
      <div className="container my-5">
        <h2>My Skills</h2>
        <SkillsProgressSection />
      </div>
    </>
  );
};

export default About;
