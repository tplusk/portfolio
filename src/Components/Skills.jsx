import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

function Skills() {
  return (
    <section id="skills" className="container" style={{ paddingLeft: "0px" }}>
      <h2 className="section-title">
        <FontAwesomeIcon icon={faCogs} className="mr-2" />
        Skills
      </h2>
      <ul className="skills-list">
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          JavaScript
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          TypeScript
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          Jest
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          Supertest
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          TDD
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          Express.js
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          Database migrations and seeding
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          REST APIs
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          PostgreSQL
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          Node.js
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          HTML
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          CSS
        </li>
        <li>
          <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
          React
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          Next.js
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          Axios
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          Lighthouse
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          Git
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          GitHub
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          Pair-programming
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          Agile methodologies
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          Scrum
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          Supabase
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          Render
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          Netlify
        </li>
        <li>
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          Vercel
        </li>
      </ul>
    </section>
  );
}

export default Skills;
