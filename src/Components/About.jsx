import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section id="about" className="container text-center">
      <div className="row">
        <div className="col-md-8" offset-md-2>
          <div className="profile-image-container">
            <h2 className="section-title">
              <h2 className="section-title">
                <FontAwesomeIcon
                  icon={faUser}
                  className="d-block mx-auto mb-2 text-primary"
                  size="3x"
                />
              </h2>
            </h2>
          </div>
          {/* Needs update */}
          <p className="section-description mt-4">
            I am a something... CHANGE IT LATER
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
