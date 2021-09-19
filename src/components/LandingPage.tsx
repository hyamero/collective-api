/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";

import renderPerson from "../img/Saly-19.png";
import doodle from "../img/doodle-5.png";
import doodle1 from "../img/doodle-4.png";
import background from "../img/Background.jpg";

interface LandingPageProps {
  loading: boolean;
}

export const LandingPage: React.FC<LandingPageProps> = ({ loading }) => {
  return (
    <header
      className="LandingPage"
      css={css`
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        overflow: hidden;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        z-index: 2;
        background: url(${background});
        background-size: cover;

        * {
          margin: auto;
        }

        .doodle {
          position: absolute;
          height: 250px;
          grid-column: 1/2;
          top: 2rem;
        }

        .doodle1 {
          position: absolute;
          height: 250px;
          grid-column: 3/4;
          bottom: 2rem;
        }

        .hero-container {
          grid-column: 2/4;

          p,
          p a {
            font-weight: 600;
            letter-spacing: 1.5px;
            color: #956bcb;
          }

          h1 {
            font-size: 3.5rem;
            line-height: 3.7rem;
            color: #280d4a;
            margin-bottom: 30px;
          }

          .btn-main {
            background: #b33cff;
            padding: 10px 40px;
            border-radius: 40px;
            color: #fff;
            font-weight: 500;
            box-shadow: 1px 1px 4px #b33cff;
          }
        }

        .renderPerson {
          height: 600px;
          position: relative;
          top: 4.5rem;
        }
      `}
    >
      <img className="doodle" src={doodle} alt="doodle" />
      <img className="doodle1" src={doodle1} alt="doodle1" />
      <div className="hero-container">
        <p>
          ⚡ POWERED BY{" "}
          <a href="https://github.com/public-apis/public-apis" target="_blank">
            PUBLIC APIS
          </a>{" "}
        </p>
        <h1>
          Collective List of <br />
          Free APIs for <br />
          Everyone
        </h1>
        <Link className="btn-main" to="/category">
          Get Started
        </Link>
      </div>
      <img className="renderPerson" src={renderPerson} alt="renderPerson" />
    </header>
  );
};
