/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import Saly38 from "../img/Saly-38.png";

interface InformationProps {}

export const Information: React.FC<InformationProps> = ({}) => {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        max-width: 1980px;
        margin: auto;
        overflow: hidden;

        h3 {
          font-size: 3rem;
          position: absolute;
          top: 50%;
          left: 5rem;
        }
      `}
    >
      <div className="information-wrap">
        <h3>nothing in here yet...</h3>
        <img src={Saly38} alt="person render" />
      </div>
    </div>
  );
};
