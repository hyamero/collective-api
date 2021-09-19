/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  scroll: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scroll }) => {
  return (
    <nav className={`${scroll ? "nav-scroll" : "Navbar"}`} css={css``}>
      <div
        className="container"
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;

          .btn-nav {
            padding: 0 60px;
            font-weight: 600;
            font-size: 0.8rem;
            color: #303030;
          }

          .logo {
            font-size: 1.2rem;
            font-weight: 700;
            color: #280d4a;
            margin: 0;
          }

          .link-github {
            font-size: 0.8rem;
            font-weight: 700;
            margin: 0;
            background: #fff;
            border-radius: 15px;
            padding: 10px 30px;
            box-shadow: 1px 1px 2px #fff;
          }
        `}
      >
        <Link to="/" className="logo">
          <h1>💡 Collective APIs</h1>
        </Link>
        <div className="btns-navbar">
          <Link className="btn-nav" to="/">
            Home
          </Link>
          <Link className="btn-nav" to="/information">
            Information
          </Link>
          <Link className="btn-nav" to="/api-results">
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
      </div>
    </nav>
  );
};
