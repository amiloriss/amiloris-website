import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navigation navigation-big">
      <ul>
        <li>
          <Link
            activeClass="active"
            to="greeting"
            spy="true"
            smooth="true"
            offset={0}
            duration="500"
          >
            Greeting
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about-me"
            spy="true"
            smooth="true"
            offset={0}
            duration="500"
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="stack"
            spy="true"
            smooth="true"
            offset={0}
            duration="500"
          >
            Stack
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy="true"
            smooth="true"
            offset={0}
            duration="500"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="send-email"
            spy="true"
            smooth="true"
            offset={0}
            duration="500"
          >
            Get in touch!
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
