/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import renderPerson from "../img/Saly-19.png";
import doodle from "../img/doodle-5.png";
import doodle1 from "../img/doodle-7.png";
import background from "../img/Background.png";
import mq from "../config/MqBreakpoints";

interface LandingPageProps {
  loading: boolean;
}

const bounce: any = {
  infinite: {
    y: ["3%", "-3%"],
    transition: {
      y: {
        duration: 1.8,
        yoyo: Infinity,
        ease: "easeOut",
      },
    },
  },
};

const bounceOpp: any = {
  infinite: {
    y: ["-3%", "3%"],
    transition: {
      y: {
        duration: 2,
        yoyo: Infinity,
        ease: "easeOut",
      },
    },
  },
};

export const LandingPage: React.FC<LandingPageProps> = ({ loading }) => {
  return (
    <header
      className="LandingPage"
      css={css`
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        right: 0;
        overflow: hidden;
        z-index: 2;
        background: url(${background});
        background-size: cover;

        ${mq[2]} {
          display: flex;
          flex-direction: column;

          .doodle,
          .doodle1 {
            display: none;
          }
        }

        * {
          margin: auto;
        }

        .doodle {
          position: absolute;
          height: 250px;
          top: 2rem;
        }

        .doodle1 {
          position: absolute;
          height: 250px;
          left: 35rem;
          bottom: 2rem;

          ${mq[4]} {
            left: 30rem;
          }

          ${mq[3]} {
            left: 20rem;
          }
        }

        .hero-container {
          height: 100vh;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .hero-main-text {
            margin: 0;

            ${mq[2]} {
              margin-top: 5rem;
              position: relative;
              top: 7rem;
            }
          }

          ${mq[2]} {
            text-align: center;
            flex-direction: column;
          }

          p,
          p a {
            font-weight: 600;
            letter-spacing: 1.5px;
            color: #956bcb;
          }

          a.public-apis:hover {
            color: #b33cff;
          }

          h1 {
            font-size: 3.5rem;
            line-height: 3.7rem;
            color: #280d4a;
            margin-bottom: 30px;
            white-space: nowrap;

            ${mq[3]} {
              font-size: 3.1rem;
              line-height: 3.2rem;
            }

            ${mq[2]} {
              font-size: 2.6rem;
              line-height: 2.6rem;
            }
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
          top: 20%;

          ${mq[3]} {
            height: 550px;
            right: 3rem;
          }

          ${mq[2]} {
            left: 0;
            top: 3rem;
            height: 470px;
          }

          ${mq[1]} {
            top: 5rem;
            height: 425px;
          }
        }
      `}
    >
      <motion.img
        variants={bounce}
        animate="infinite"
        className="doodle"
        src={doodle}
        alt="doodle"
      />
      <motion.img
        variants={bounceOpp}
        animate="infinite"
        className="doodle1"
        src={doodle1}
        alt="doodle1"
      />
      <div className="hero-container container">
        <div className="hero-main-text">
          <p>
            ⚡ POWERED BY{" "}
            <a
              href="https://github.com/public-apis/public-apis"
              target="_blank"
              className="public-apis"
            >
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
      </div>
    </header>
  );
};
