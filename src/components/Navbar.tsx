/** @jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  scroll: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scroll }) => {
  return (
    <nav className={`${scroll ? "nav-scroll" : "Navbar"}`} css={css``}>
      <div className="container" css={css``}>
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

      <Global
        styles={css`
          .Navbar {
            height: 100px;
            margin-bottom: 25px;
            padding-top: 25px;
            position: fixed;
            z-index: 3;
            width: 100vw;
            transition: linear 0.3s;
            overflow-x: hidden;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .container {
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
            }
          }

          .nav-scroll {
            background: rgba(180, 61, 255, 0.5);
            height: 80px;
            margin-bottom: 25px;
            position: fixed;
            z-index: 3;
            width: 100vw;
            transition: linear 0.3s;
            overflow-x: hidden;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom-right-radius: 100px;

            .container {
              display: flex;
              justify-content: space-between;
              align-items: center;

              .btn-nav {
                padding: 0 60px;
                font-weight: 600;
                font-size: 0.8rem;
                color: #000;
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
                background: rgba(255, 255, 255, 0.8);
                border-radius: 15px;
                padding: 10px 30px;
                box-shadow: 1px 1px 2px #fff;
              }
            }
          }
        `}
      />
    </nav>
  );
};
