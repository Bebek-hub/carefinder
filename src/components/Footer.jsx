import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer_line"></div>

      <section className="footer">
        <div className="footer_contact">
          <p>Get in Touch</p>
          <a href="mailto:godsfavourtolu@gmail.com">Email</a>
          <a href="tel:+2348068705354">Phone Number</a>
        </div>

        <div className="footer_company">
          <p>Company</p>
          <a href="http://">About</a>
          <a href="http://">Blog</a>
          <a href="http://">Team</a>
          <a href="http://">Board</a>
        </div>

        <div className="footer_health">
            <p>Health Plans</p>
            <a href="http://">You & Your family</a>
            <a href="http://">Your Parents</a>
            <a href="http://">For Organizations</a>
        </div>

        <div className="footer_Resources">
            <p>Resources</p>
            <a href="http://">Available Hospitals</a>
            <a href="http://">Benefit list</a>
            <a href="http://">Download CareFinder App</a>
            <a href="http://">Hospital Portal</a>
            <a href="http://">FAQs</a>
            <a href="http://">Terms of Use</a>
            <a href="http://">Privacy Policy</a>
        </div>
      </section>

      <aside>
        <p className="footer_message">
          {" "}
          &copy;Copyright 2023; All Rights Reserved{" "}
        </p>
        <div className="header_sub-icons">
          <Link
            to="https://github.com/Bebek-hub/"
            target="_blank"
            className="icon"
          >
            <FaGithub />
          </Link>
          <Link
            to="https://hashnode.com/@Tioluwalope"
            target="_blank"
            className="icon"
          >
            <SiHashnode />
          </Link>
          <Link
            to="https://www.linkedin.com/in/omoaregodsfavour"
            target="_blank"
            className="icon"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to="https://medium.com/@omoaregodsfavour"
            target="_blank"
            className="icon"
          >
            <FaMediumM />
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Footer;
