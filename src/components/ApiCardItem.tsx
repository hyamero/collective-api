/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";

interface ApiCardProps {
  api: any;
}

export const ApiCardItem: React.FC<ApiCardProps> = ({ api }) => {
  return (
    <ul css={css``}>
      <li>{api.API}</li>
      <li>{api.Category}</li>
      <li>{api.Description}</li>
      <li>link</li>
      <li>{api.Auth === "" ? "no auth" : api.Auth}</li>
      <li>{api.HTTPS}</li>
      <li>{api.Cors}</li>
    </ul>
  );
};
