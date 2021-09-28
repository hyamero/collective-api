/** @jsxFrag */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { Redirect } from "react-router";
import { FiExternalLink } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

import doodle3 from "../img/doodle-7.png";

interface CategoryResultProps {
  categoryData: any;
  loading: boolean;
  categoryName: string | undefined;
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  getSearchResult: () => Promise<void>;
  startLoading: () => void;
}

const bounce: any = {
  infinite: {
    y: ["3%", "-3%"],
    transition: {
      y: {
        duration: 2,
        yoyo: Infinity,
        ease: "easeOut",
      },
    },
  },
};

export const CategoryResult: React.FC<CategoryResultProps> = ({
  categoryData,
  loading,
  categoryName,
  keyword,
  setKeyword,
  getSearchResult,
  startLoading,
}) => {
  let history = useHistory();

  return (
    <div className="CardSection" css={css``}>
      {!loading && (
        <>
          <motion.img
            variants={bounce}
            animate="infinite"
            src={doodle3}
            alt="doodle3"
            className="doodle3"
          />
          <div className="categories-header">
            <div className="category-main-text">
              <h3>APIs related to {categoryName}</h3>
            </div>
            <div className="searchbar">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  history.push(`/search/${keyword}`);
                  getSearchResult();
                  startLoading();
                }}
              >
                <input
                  type="text"
                  maxLength={25}
                  placeholder="Search an API"
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </form>
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
          {typeof categoryData !== "undefined" && categoryData !== null ? (
            categoryData.map((entry: any) => (
              <a
                href={entry.Link}
                target="_blank"
                key={entry.Link}
                className="category-data-container"
              >
                <CategoryEntry entry={entry} />
              </a>
            ))
          ) : (
            <Redirect to="/api-results" />
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
    <div className="CategoryEntry" css={css``}>
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
