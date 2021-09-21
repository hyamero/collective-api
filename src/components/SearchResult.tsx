/** @jsx jsx */
/**@jsxFrag */
import { css, jsx } from "@emotion/react";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

interface SearchResultProps {
  searchResult: any;
  loading: boolean;
  keyword: string;
  startLoading: () => void;
}

export const SearchResult: React.FC<SearchResultProps> = ({
  searchResult,
  loading,
  keyword,
  startLoading,
}) => {
  return (
    <div
      css={css`
        min-height: 100vh;
        width: 100vw;
        padding: 50px;
        position: absolute;
        top: 0;
        background: #f0f0f2;
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
          flex-direction: column;
          align-items: center;
          margin-bottom: 15px;
          width: 100vw;
          padding: 0 50px;
          margin-top: 0;

          .all-link {
            font-size: 0.9rem;
            z-index: 2;

            a {
              color: #8e4ae3;
            }

            .link-public::after {
              content: "";
              width: 2px;
              height: 15px;
              background: #8e4ae3;
              display: inline-block;
              position: relative;
              top: 3px;
              margin: 0 10px;
            }
          }

          .category-main-text {
            margin: 0 40px;
            position: relative;
            z-index: 2;

            h3 {
              font-size: 1.8rem;
              color: #280d4a;
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
              border: none;
              font-size: 0.9rem;
              padding: 0 10px;
              position: relative;
              left: 0.9rem;
              z-index: 2;
              background: #ffffff;
            }

            .icon-search-container {
              background: #ffffff;
              position: absolute;
              left: -0.9rem;
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
      {!loading && (
        <>
          <div className="categories-header container">
            <div className="category-main-text">
              <h3>APIs related to {keyword}</h3>
            </div>
            <div className="searchbar">
              <input type="text" placeholder="Search a Category" />
              <div className="icon-search-container">
                <FiSearch className="icon-search" />
              </div>
            </div>
            <div className="all-link">
              <Link
                to="/api-results"
                onClick={() => startLoading()}
                className="link-public"
              >
                List all Public APIs
              </Link>
              <Link to="/category" className="link-category">
                Change Category
              </Link>
            </div>
          </div>
          {typeof searchResult !== "undefined" && searchResult !== null ? (
            searchResult.map((entry: any) => (
              <div key={entry.Link} className="category-data-container">
                <CategoryEntry entry={entry} />
              </div>
            ))
          ) : (
            <div className="no-match">no match found</div>
          )}
        </>
      )}
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
        width: 410px;
        padding: 25px 30px;
        border-radius: 25px;
        background: #fff;
        box-shadow: 1px 1px 4px #e0e0e0;

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
            font-weight: 500;
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
