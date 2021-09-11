/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

interface CategoryEntryProps {
  entry: any;
}

export const CategoryEntry: React.FC<CategoryEntryProps> = ({ entry }) => {
  return (
    <div
      className="CategoryEntry"
      css={css`
        .api-title-category {
          display: flex;
          justify-content: space-between;

          .api-title {
            display: flex;
          }
        }

        ul {
          display: flex;
          justify-content: flex-start;
        }

        .entry-description {
          margin: 5px 0;
          font-size: 0.9rem;
        }
      `}
    >
      <div className="api-title-category">
        <div className="api-title">
          <h3>{entry.API}</h3>
          <FiExternalLink />
        </div>
        <span>{entry.Category}</span>
      </div>
      <p className="entry-description">{entry.Description}</p>
      <ul>
        <li>
          Auth: <span>{entry.Auth === "" ? "No Auth" : entry.Auth}</span>
        </li>
        <li>
          HTTPS: <span>{entry.HTTPS.toString()}</span>
        </li>
        <li>
          Cors: <span>{entry.Cors}</span>
        </li>
      </ul>
    </div>
  );
};

<button>lol what</button>;
