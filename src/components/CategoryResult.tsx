/** @jsxFrag */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useEffect } from "react";
import { AllEntries } from "./AllEntries";
import { FiExternalLink } from "react-icons/fi";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

interface CategoryResultProps {
  categoryData: any;
  loading: boolean;
  categoryName: string | undefined;
}

export const CategoryResult: React.FC<CategoryResultProps> = ({
  categoryData,
  loading,
  categoryName,
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

        .categories-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          width: 100vw;

          .category-main-text {
            margin: 0 40px;

            h3 {
              font-size: 1.8rem;
              color: #280d4a;
            }

            .all-link {
              font-size: 1rem;
              color: #8e4ae3;
              position: relative;
              bottom: 10px;
              border-bottom: 1px #8e4ae3 solid;
            }
          }

          .searchbar {
            margin: 0 40px;
            position: relative;

            input {
              height: 2.2rem;
              width: 300px;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
              /* border-radius: 15px; */
              border: none;
              font-size: 0.9rem;
              padding: 0 10px;
              position: relative;
              z-index: 2;
              background: #ffffff;
              box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
            }

            .icon-search-container {
              background: #ffffff;
              box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
              position: absolute;
              left: -1.8rem;
              bottom: 0;
              height: 2.2rem;
              width: 30px;
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              padding-left: 10px;

              .icon-search {
                font-size: 1.3rem;
                color: #757575;
              }
            }
          }
        }
      `}
    >
      <div className="categories-header container">
        <div className="category-main-text">
          <h3>APIs related to {categoryName}</h3>
          <Link to="/results" className="all-link">
            List all categories instead
          </Link>
        </div>
        <div className="searchbar">
          <input type="text" placeholder="Search a Category" />
          <div className="icon-search-container">
            <FiSearch className="icon-search" />
          </div>
        </div>
      </div>
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
