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
        padding-top: 25px;

        .btn-nav {
          padding: 0 60px;
          font-weight: 600;
          font-size: 0.8rem;
          color: #303030;
        }

        .logo {
          font-size: 1.2rem;
          font-weight: 700;
          color: #000;
          margin: 0;
        }

        .link-github {
          font-size: 0.8rem;
          font-weight: 700;
          margin: 0;
          background: #fff;
          border-radius: 15px;
          padding: 10px 30px;
        }
      `}
    >
      <Link to="/" className="logo">
        <h1>Collective APIs</h1>
      </Link>
      <div className="btns-navbar">
        <Link className="btn-nav" to="/">
          Home
        </Link>
        <Link className="btn-nav" to="/information">
          Information
        </Link>
        <Link className="btn-nav" to="/all-results">
          Find APIs
        </Link>
      </div>
      <a
        className="link-github"
        href="https://github.com/hyamero/collective-api"
        target="_blank"
      >
        GitHub Repo
      </a>
    </nav>
  );
};
