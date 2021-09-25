/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div
      className="Footer"
      css={css`
        width: 100vw;
        height: 100px;
        /* background: coral; */
        position: absolute;
        bottom: 0;
        z-index: 10;
      `}
    >
      <p></p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
