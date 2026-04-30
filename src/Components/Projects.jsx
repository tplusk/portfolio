import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Breadcrumbs from "./Breadcrumbs";
import "./styles.css";
import Skills from "./Skills";

function Projects() {
  const breadcrumbsPaths = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Projects",
      to: "/projects",
    },
  ];

  return (
    <section id="projects" className="container text-center">
      <Breadcrumbs paths={breadcrumbsPaths} />
      <h2 className="section-title">
        <FontAwesomeIcon icon={faCode} className="mr-2" />
        Projects
      </h2>
      <div className="row">
        {/* Project number 1 */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">
                {/* Project number 1 */}
                Project number one
              </h5>
              <p className="card-text">Info about the project.</p>
            </div>
          </div>
        </div>
        {/* Project number 2 */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">
                {/* Project number 2 */}
                Project number one
              </h5>
              <p className="card-text">Info about the project.</p>
            </div>
          </div>
        </div>
        {/* Project number 3 */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">
                {/* Project number 3 */}
                Project number one
              </h5>
              <p className="card-text">Info about the project.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <h3>{Skills}Skills</h3>
      </div>
    </section>
  );
}

export default Projects;
