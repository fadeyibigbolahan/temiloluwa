// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-2xl font-sora font-bold mb-4 md:mb-0">
            OT<span className="text-gray-500">.</span>
          </div>

          <div className="flex space-x-6 font-sora text-sm">
            <a href="#about" className="hover:text-gray-400 transition-colors">
              About
            </a>
            <a
              href="#services"
              className="hover:text-gray-400 transition-colors"
            >
              Services
            </a>
            <a href="#work" className="hover:text-gray-400 transition-colors">
              Work
            </a>
            {/* <a
              href="#experience"
              className="hover:text-gray-400 transition-colors"
            >
              Experience
            </a> */}
            <a
              href="#contact"
              className="hover:text-gray-400 transition-colors"
            >
              Contact
            </a>
          </div>

          <p className="font-lora text-sm text-gray-400 mt-4 md:mt-0">
            © 2026 Okeowo Temiloluwa Emmanuel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
