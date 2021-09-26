/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { FaDiscord, FaInstagram, FaLinkedinIn } from "react-icons/fa";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div
      className="Footer"
      css={css`
        width: 50px;
        height: 60vh;
        background: transparent;
        position: fixed;
        z-index: 10;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          white-space: nowrap;

          &::after {
            content: "";
            height: 1.6px;
            width: 3rem;
            background: #000;
            display: inline-block;
            position: relative;
            bottom: 4px;
            left: 5px;
          }
        }

        ul {
          display: flex;
          flex-direction: row-reverse;

          li {
            margin: 0 1rem;
            transform: rotate(90deg);

            a {
              color: #471765;
              font-size: 1.2rem;
              transition: 0.2s linear;

              &:hover {
                color: #7d2ab2;
              }
            }
          }
        }

        .footer-content {
          transform: rotate(-90deg);
          display: flex;
          justify-content: space-between;
        }
      `}
    >
      <div className="footer-content">
        <p>
          Created by{" "}
          <a href="https://github.com/hyamero" target="_blank">
            Dale B.{" "}
          </a>
        </p>
        <ul>
          <li>
            <a href="https://dsc.bio/dale" target="_blank">
              <FaDiscord />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/dale.ps/" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/daleban/" target="_blank">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
