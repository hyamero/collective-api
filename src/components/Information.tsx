/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import Saly38 from "../img/Saly-38.png";
import mq from "../config/MqBreakpoints";

interface InformationProps {}

export const Information: React.FC<InformationProps> = ({}) => {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        max-width: 1980px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        overflow: hidden;

        h3 {
          font-size: 3rem;
          position: relative;
          left: 9rem;
        }

        img {
          height: 720px;
          position: relative;
          top: 5rem;
        }

        ${mq[1]} {
          h3 {
            font-size: 2rem;
            left: 10rem;
          }

          img {
            height: 550px;
          }
        }
      `}
    >
      <h3>nothing in here yet...</h3>
      <img src={Saly38} alt="person render" />
    </div>
  );
};
