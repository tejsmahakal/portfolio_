// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-slate-800 bg-slate-900/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-slate-400">
        
        {/* Left Text */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-emerald-400">Tejas Mahakal</span>{" "}
          • MERN + DevOps + AWS
        </p>

        {/* Right Side Links */}
        <div className="flex gap-6 mt-3 md:mt-0 text-sm">

          {/* GitHub - placeholder until you give username */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition"
          >
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tejas-mahakal-758094206/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition"
          >
            LinkedIn
          </a>

          {/* Email */}
          <a
            href="mailto:tejs.mahakal@gmail.com"
            className="hover:text-emerald-400 transition"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
