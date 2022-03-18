/** @jsx jsx */
/**@jsxFrag */
import { css, jsx } from "@emotion/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mq from "../config/MqBreakpoints";
import { FiSearch } from "react-icons/fi";

import doodle3 from "../img/doodle-7.png";
import { Loader } from "./Loader";

interface CategoriesProps {
  categories: any;
  setCategoryName: React.Dispatch<React.SetStateAction<string | undefined>>;
  startLoading: () => void;
}

export const Categories: React.FC<CategoriesProps> = ({
  categories,
  setCategoryName,
  startLoading,
}) => {
  const [categoryFilter, setCategoryFilter] = useState<string | undefined>("");
  const [categorySearch, setCategorySearch] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (categoryFilter === "") {
      setCategorySearch(false);
    } else {
      setCategorySearch(true);
    }
  }, [categoryFilter]);

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

  return (
    <div
      className="Categories"
      css={css`
        width: 100vw;
        min-height: 100vh;
        background: #f0f0f2;
        position: absolute;
        top: 0;
        padding-top: 130px;
        overflow-x: hidden;

        .categories-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          overflow-x: hidden;
          padding: 0 50px;

          ${mq[3]} {
            flex-direction: column;
            text-align: center;
          }

          .category-main-text {
            margin: 0 40px;

            h3 {
              font-size: 1.8rem;
              color: #280d4a;
              white-space: nowrap;
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
            left: 20px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;

            input {
              height: 2.2rem;
              width: 300px;
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
              border: none;
              font-size: 0.9rem;
              padding: 0 10px;
              position: relative;
              z-index: 2;
            }

            .icon-search-container {
              background: #fff;
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

        .categories-container p {
          text-align: center;
          font-size: 0.8rem;
          font-weight: 400;
          height: 40px;
          color: #fff;
          margin: 10px;
          width: 190px;
          background: linear-gradient(#b33cff, #c168fa);
          box-shadow: 1px 1px 2px #c168fa;
          padding: 10px 0;
          border-radius: 10px;

          ${mq[3]} {
            width: 170px;
          }

          ${mq[0]} {
            width: 220px;
          }
        }

        .categories-container .smol {
          font-size: 0.7rem;
        }

        .doodle3 {
          position: absolute;
          left: 0;
          top: 2rem;
          height: 220px;

          ${mq[1]} {
            display: none;
          }
        }
      `}
    >
      <motion.img
        variants={bounce}
        animate="infinite"
        src={doodle3}
        alt="doodle3"
        className="doodle3"
      />
      {!categories ? (
        <Loader />
      ) : (
        <div
          className="wrapper"
          css={css`
            width: 80%;
            max-width: 1280px;
            margin: auto;
            overflow-x: hidden;
          `}
        >
          <div className="categories-header">
            <div className="category-main-text">
              <h3>Select a Category</h3>
              <Link to="/api-results" className="all-link">
                List all categories instead
              </Link>
            </div>
            <div className="searchbar">
              <input
                type="text"
                maxLength={25}
                placeholder="Search a Category"
                onChange={(e) => setCategoryFilter(e.target.value)}
              />
              <div className="icon-search-container">
                <FiSearch className="icon-search" />
              </div>
            </div>
          </div>
          <div
            className="categories-container"
            css={css`
              display: flex;
              flex-flow: row wrap;
              justify-content: center;
              background: #fff;
              border-radius: 50px;
              padding: 50px;
            `}
          >
            {message}
            {typeof categories !== "undefined" && categorySearch === false
              ? categories.map((category: string | undefined) => (
                  <Link to={`/category/${category}`} key={category}>
                    <p
                      className={`${
                        category!.split("").length >= 22 ? "smol" : null
                      }`}
                      onClick={() => {
                        setCategoryName(category);
                      }}
                    >
                      {category}
                    </p>
                  </Link>
                ))
              : null}

            {typeof categories !== "undefined" && categorySearch === true
              ? categories
                  .filter((category: any) =>
                    category
                      .toLowerCase()
                      .includes(categoryFilter?.toLowerCase())
                  )
                  .map((category: string | undefined) => (
                    <Link to={`/category/${category}`} key={category}>
                      <p
                        className={`${
                          category!.split(" ").length >= 22 ? "smol" : null
                        }`}
                        onClick={() => {
                          setCategoryName(category);
                        }}
                      >
                        {category}
                      </p>
                    </Link>
                  ))
              : null}
          </div>
        </div>
      )}
    </div>
  );
};
