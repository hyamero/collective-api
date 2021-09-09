/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { ApiCardItem } from "./ApiCardItem";

interface ApiCardProps {
  data: any;
  showContent: boolean;
}

export const ApiCards: React.FC<ApiCardProps> = ({ data, showContent }) => {
  return (
    <div
      className="ApiCard container"
      css={css`
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        justify-items: center;
        gap: 2rem;
        margin: auto;

        .api-card {
          background: coral;
        }
      `}
    >
      {/* All entries */}
      {showContent &&
        data.map((api: any) => (
          <div className="api-card" key={api.Link}>
            <ApiCardItem api={api} />
          </div>
        ))}
    </div>
  );
};
