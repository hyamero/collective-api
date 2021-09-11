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
        background: #fff;
        width: 410px;
        padding: 25px 30px;
        border-radius: 25px;

        .api-title-category {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid #dcdcdc;
          padding-bottom: 7px;

          .api-title {
            font-size: 1rem;
            color: #280d4a;
            display: flex;
            align-items: center;

            .icon-link {
              color: #a415ff;
              font-size: 0.8rem;
            }
          }

          .category-badge {
            background: #b43dff;
            color: #fff;
            font-size: 0.7rem;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 50px;
          }
        }

        ul {
          display: flex;
          justify-content: space-evenly;
        }

        .entry-description {
          margin: 5px 0;
          font-size: 0.9rem;
          color: #515151;
        }
      `}
    >
      <div className="api-title-category">
        <div className="api-title">
          <h3>{entry.API}</h3>
          <span>
            <FiExternalLink className="icon-link" />
          </span>
        </div>
        <span className="category-badge">{entry.Category}</span>
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
