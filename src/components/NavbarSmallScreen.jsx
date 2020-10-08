import React, { useState } from 'react';
import { Link } from 'react-scroll';

const NavbarSmallScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu-wrapper">
      <div className="toggler" onClick={() => setIsOpen(!isOpen)}>
        <div
          className="line first-line"
          style={{
            backgroundColor: isOpen && '#a8dadc ',
            top: isOpen && '50%',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
            transition: isOpen
              ? 'top 0.05s ease-in-out, transform 0.2s ease 0.035s, background-color 0.2s'
              : 'transform 0.2s ease, top 0.15s ease-in-out 0.1s, background-color 0.2s ',
          }}
        ></div>
        <div
          className="line second-line"
          style={{
            backgroundColor: isOpen && '#a8dadc',
            opacity: isOpen ? 0 : 1,
            transition: 'opacity .15s ease-in, background-color 0.2s',
          }}
        ></div>
        <div
          className="line third-line"
          style={{
            backgroundColor: isOpen && '#a8dadc',
            top: isOpen && '50%',
            transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)',
            transition: isOpen
              ? 'top 0.05s ease-in-out, transform 0.2s ease 0.035s, background-color 0.2s'
              : 'transform 0.2s ease, top 0.15s ease-in-out 0.1s, background-color 0.2s',
          }}
        ></div>
      </div>
      <nav
        className="navigation navigation-small"
        style={{
          transform: isOpen ? 'translateX(0)' : 'translatex(-100%)',
          visibility: isOpen ? 'visible' : 'hidden',
        }}
      >
        <div className="list-wrapper">
          <ul>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
        </div>
      </nav>
    </div>
  );
};

export default NavbarSmallScreen;
