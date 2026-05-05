import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 mt-5">
      <div className="container text-center">

        {/* Icons */}
        <div className="mb-3">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white mx-3 fs-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://wa.me/923131500617" target="_blank" rel="noreferrer" className="text-white mx-3 fs-4">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.linkedin.com/in/ahtisham-ali-058782211/" target="_blank" rel="noreferrer" className="text-white mx-3 fs-4">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="text-white mx-3 fs-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:aliahtisham241@gmail.com" className="text-white mx-3 fs-4">
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        {/* Rights Text */}
        <div className="small">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
