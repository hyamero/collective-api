/** @jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import React, { ReactInstance, useState } from "react";
import { Link } from "react-router-dom";
import mq from "../config/MqBreakpoints";

import { HiMenuAlt3 } from "react-icons/hi";

interface NavbarProps {
  scroll: boolean;
  startLoading: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scroll, startLoading }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav
      className={`${
        scroll && menuOpen
          ? "nav-mobile"
          : scroll
          ? "nav-scroll"
          : menuOpen
          ? "nav-mobile"
          : "Navbar"
      }`}
      onMouseLeave={() => setMenuOpen(false)}
    >
      <HiMenuAlt3
        className="icon-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <div className="container" css={css``}>
        <Link to="/" className="logo">
          <h1>💡 Collective APIs</h1>
        </Link>
        <div className="btns-navbar">
          <Link className="btn-nav" to="/information">
            Information
          </Link>
          <Link className="btn-nav" to="/category">
            Categories
          </Link>
          <Link
            className="btn-nav"
            to="/api-results"
            onClick={() => startLoading()}
          >
            Public APIs
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
            position: fixed;
            z-index: 3;
            width: 100vw;
            transition: linear 0.3s;
            overflow: hidden;
            display: flex;
            justify-content: space-between;
            align-items: center;
            white-space: nowrap;

            ${mq[2]} {
              height: 80px;
              padding-top: 0;
            }

            .container {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .btn-nav {
              padding: 0 60px;
              font-weight: 600;
              font-size: 0.8rem;
              color: #303030;

              ${mq[3]} {
                padding: 20px;
              }

              ${mq[2]} {
                display: none;
              }
            }

            .link-github {
              font-size: 0.8rem;
              font-weight: 700;
              margin: 0;
              background: #fff;
              border-radius: 15px;
              padding: 10px 30px;
              box-shadow: 1px 1px 2px #fff;

              ${mq[3]} {
                font-size: 0.7rem;
                padding: 10px 20px;
              }

              ${mq[2]} {
                display: none;
              }
            }
          }

          .nav-scroll {
            background: #d695ff;
            height: 80px;
            margin-bottom: 25px;
            position: fixed;
            z-index: 3;
            width: 100vw;
            transition: linear 0.3s;
            overflow: hidden;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom-right-radius: 100px;
            white-space: nowrap;

            ${mq[2]} {
              border-bottom-right-radius: 0;
            }

            .container {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .btn-nav {
              padding: 0 60px;
              font-weight: 600;
              font-size: 0.8rem;
              color: #303030;

              ${mq[3]} {
                padding: 20px;
              }

              ${mq[2]} {
                display: none;
              }
            }

            .link-github {
              font-size: 0.8rem;
              font-weight: 700;
              margin: 0;
              background: #fff;
              border-radius: 15px;
              padding: 10px 30px;
              box-shadow: 1px 1px 2px #fff;

              ${mq[3]} {
                font-size: 0.7rem;
                padding: 10px 20px;
              }

              ${mq[2]} {
                display: none;
              }
            }
          }

          .nav-mobile {
            height: 70vh;
            width: 100vw;
            background: rgba(180, 61, 255, 0.5);
            margin-bottom: 25px;
            position: fixed;
            z-index: 3;
            transition: linear 0.3s;
            overflow: hidden;
            white-space: nowrap;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .btn-nav {
              font-weight: 700;
              font-size: 2rem;
              color: #000;
              display: block;
              margin: auto;
              margin: 25px 0;
              background: #d695ff;
              padding-left: 15px;
              border-radius: 10px;
              color: #280d4a;
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

            .container {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              border-radius: 50px;
              padding: 30px 0;
            }
          }

          .logo {
            font-size: 1.2rem;
            font-weight: 700;
            color: #280d4a;
            margin: 0;

            ${mq[2]} {
              position: absolute;
              margin-left: 91px;
              left: 0;
              top: 2rem;
            }

            ${mq[1]} {
              margin-left: 30px;
            }
          }

          .icon-menu {
            background: #d297f9;
            height: 35px;
            width: 35px;
            position: absolute;
            top: 1.5rem;
            right: 0;
            margin-right: 91px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            display: none;

            ${mq[2]} {
              display: block;
            }

            ${mq[1]} {
              margin-right: 30px;
            }
          }
        `}
      />
    </nav>
  );
};
