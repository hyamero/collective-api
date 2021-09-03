/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav
      className="Navbar container"
      css={css`
        display: flex;
        height: 100px;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;

        .logo {
          font-size: 2rem;
          margin: 0;
        }

        .link-github {
          font-size: 1.3rem;
          margin: 0;
        }
      `}
    >
      <Link to="/" className="logo">
        <h1>Collective APIs</h1>
      </Link>
      <div className="link-github">
        <a
          className="link-github"
          href="https://github.com/hyamero/collective-api"
          target="_blank"
        >
          github
        </a>
      </div>
    </nav>
  );
};
