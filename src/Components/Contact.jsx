import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Breadcrumbs from "./Breadcrumbs";
import "./styles.css";
import { Nav } from "react-bootstrap";

function Contact() {
  const breadcrumbsPaths = [
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
      <Breadcrumbs paths={breadcrumbsPaths} />
      <h2 className="section-title">Contact</h2>
      <p className="section-description">
        Hit me up if you want to collaborate on the following links
      </p>
      <ul className="contact-list list-unstyled">
        <li>
          <Nav.Link href="mailto:tplusk.uk@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
              className="text-light ho"
            />
            <span className="sr-only">e-mail</span>
          </Nav.Link>
        </li>
        <li>
          <nav>
            <Nav.Link href="https://www.linkedin.com/in/tamas-kis-1ab34935a/?skipRedirect=true">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                className="text-light ho"
              />
              <span className="sr-only">Linkedin</span>
            </Nav.Link>
            <Nav.Link href="https://github.com/tplusk">
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                className="text-light ho"
              />
              <span className="st-only">GitHub</span>
            </Nav.Link>
          </nav>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
