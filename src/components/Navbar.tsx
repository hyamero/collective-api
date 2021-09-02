/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";

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

        h1 {
          font-size: 2rem;
        }

        .link-github {
          font-size: 1.3rem;
        }
      `}
    >
      <h1>Collective APIs</h1>
      <a
        className="link-github"
        href="https://github.com/hyamero/collective-api"
      >
        github
      </a>
    </nav>
  );
};
