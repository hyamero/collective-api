/** @jsx jsx */
/**@jsxFrag */
import { css, jsx, Global } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import mq from "../config/MqBreakpoints";

import doodle3 from "../img/doodle-7.png";
// import "aos/dist/aos.css";

interface AllEntriesProps {
  allEntries: any;
  loading: boolean;
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

export const AllEntries: React.FC<AllEntriesProps> = ({
  allEntries,
  loading,
  keyword,
  setKeyword,
  getSearchResult,
  startLoading,
}) => {
  const [showNumber, setShowNumber] = useState<number>(33);

  let history = useHistory();

  return (
    <div
      className="CardSection"
      css={css`
        button {
          background: #b642ff;
          color: #fff;
          padding: 5px 20px;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          height: 35px;
          position: absolute;
          margin: auto;
          bottom: 1.4rem;

          ${mq[2]} {
            height: 30px;
            font-size: 0.9rem;
            padding: 5px 15px;
          }

          ${mq[1]} {
            font-size: 0.8rem;
          }

          ${mq[0]} {
            font-size: 0.7rem;
            padding: 5px 10px;
          }
        }
      `}
    >
      {!loading && (
        <>
          <motion.img
            variants={bounce}
            animate="infinite"
            src={doodle3}
            alt="doodle3"
            className="doodle3"
          />

          <div className="categories-header container">
            <div className="category-main-text">
              <h3>Public APIs</h3>
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
            <Link to="/category" className="all-link">
              Select a Category
            </Link>
          </div>
          {typeof allEntries !== "undefined"
            ? allEntries.slice(0, showNumber).map((entry: any) => (
                <a
                  href={entry.Link}
                  target="_blank"
                  key={entry.Link}
                  className="category-data-container"
                  // data-aos="fade-up"
                >
                  <CategoryEntry entry={entry} />
                </a>
              ))
            : null}
          <button
            onClick={() => {
              setShowNumber(showNumber + 33);
            }}
          >
            Show More
          </button>
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
