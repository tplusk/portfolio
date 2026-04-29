import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Breadcrumb } from "react-bootstrap";
import "./styles.css";

function Contact() {
  const breadcumbsPaths = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Contact",
      to: "/contact",
    },
  ];

  return (
    <section id="contact" className="container">
      <Breadcrumbs paths={breadcumbsPaths} />
      <h2 className="section-title">Contact</h2>
      <p className="section-description">
        Hit me up if you want to collaborate
      </p>
      <ul className="contact-list list-unstyled">
        {/* not sure if I want to share my e-mail yet */}
        <li>
          <FontAwesomeIcon icon={faEnvelope} className="contact-form" />
          e-mail address comes here
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
          LinkedIn
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} className="contact-icon" />
          GitHub
        </li>
      </ul>
    </section>
  );
}

export default Contact;
