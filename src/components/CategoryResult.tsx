/** @jsxFrag */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useEffect } from "react";
import { AllEntries } from "./AllEntries";
import { FiExternalLink } from "react-icons/fi";
import { Redirect } from "react-router";

interface CategoryResultProps {
  categoryData: any;
  loading: boolean;
}

export const CategoryResult: React.FC<CategoryResultProps> = ({
  categoryData,
  loading,
}) => {
  return (
    <div
      css={css`
        height: 100%;
        width: 100vw;
        top: 0;
        padding: 50px;
        position: absolute;
        /* background-image: linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%); */
        background: #fff;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        overflow-x: hidden;
        padding-top: 150px;

        .category-data-container {
          margin: 20px;
        }
      `}
    >
      {!loading && categoryData !== null
        ? categoryData.map((entry: any) => (
            <div key={entry.Link} className="category-data-container">
              <CategoryEntry entry={entry} />
            </div>
          ))
        : !loading && <Redirect to="/category/all-results" />}
    </div>
  );
};

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
        background: #ffffff;
        box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;

        .api-title-category {
          display: flex;
          flex-wrap: wrap-reverse;
          justify-content: space-between;
          border-bottom: 2px solid #dcdcdc;
          padding: 0 5px 7px 0;

          .api-title {
            font-size: 1rem;
            color: #280d4a;
            display: flex;
            align-items: center;

            .small-text {
              font-size: 0.85rem;
            }

            h3 {
              display: inline-block;
            }

            .icon-link {
              color: #a415ff;
              font-size: 0.8rem;
              margin-left: 2px;
            }
          }

          .category-badge {
            background: #b43dff;
            color: #fff;
            font-size: 0.7rem;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 50px;
            margin-bottom: 5px;
          }
        }

        ul {
          display: flex;
          justify-content: flex-start;
          padding-left: 5px;

          li {
            font-size: 0.8rem;

            span {
              color: #7500bf;
            }

            &:not(:last-child) {
              margin-right: 20px;

              &::after {
                content: "";
                height: 15px;
                width: 1.7px;
                background: #bababa;
                display: inline-block;
                position: relative;
                left: 7px;
                top: 3px;
              }
            }
          }

          li.green {
            &::before {
              content: "";
              height: 8px;
              width: 8px;
              background: #04f404;
              border-radius: 50%;
              display: inline-block;
              position: relative;
              right: 5px;
            }
          }

          li.orange {
            &::before {
              content: "";
              height: 8px;
              width: 8px;
              background: #ff8c00;
              border-radius: 50%;
              display: inline-block;
              position: relative;
              right: 5px;
            }
          }

          li.red {
            &::before {
              content: "";
              height: 8px;
              width: 8px;
              background: #ff0800;
              border-radius: 50%;
              display: inline-block;
              position: relative;
              right: 5px;
            }
          }
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
          <h3
            className={`${
              entry.API.split(" ").length >= 3 ? "small-text" : null
            }`}
          >
            {entry.API}
          </h3>
          <span>
            <FiExternalLink className="icon-link" />
          </span>
        </div>
        <span className="category-badge">{entry.Category}</span>
      </div>
      <p className="entry-description">{entry.Description}</p>
      <ul>
        <li className={`${entry.Auth === "" ? "green" : "orange"}`}>
          Auth: <span>{entry.Auth === "" ? "No Auth" : entry.Auth}</span>
        </li>
        <li className={`${entry.HTTPS == true ? "green" : "red"}`}>
          HTTPS: <span>{entry.HTTPS.toString()}</span>
        </li>
        <li
          className={`${
            entry.Cors === "yes"
              ? "green"
              : entry.Cors === "no"
              ? "red"
              : "orange"
          }`}
        >
          Cors: <span>{entry.Cors}</span>
        </li>
      </ul>
    </div>
  );
};
