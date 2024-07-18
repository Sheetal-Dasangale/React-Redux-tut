import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <h1>This is the About Page </h1>;
      <ul>
        <li>
          <Link to="/user/india">India</Link>
        </li>
        <li>
          <Link to="/user/usa">USA</Link>
        </li>
      </ul>
    </div>
  );
}
export default About;
