import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./styles.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>©2026. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-right">
            <ul className="social-icons list-unstyled">
              <li>
                <a
                  href="https://www.linkedin.com/in/tamas-kis-1ab34935a/"
                  target="/blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tplusk"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
