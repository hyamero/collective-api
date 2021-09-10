/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { FiSearch } from "react-icons/fi";

interface CategoriesProps {
  categories: any;
  setCategoryName: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const Categories: React.FC<CategoriesProps> = ({
  categories,
  setCategoryName,
}) => {
  return (
    <div
      className="Categories"
      css={css`
        width: 80%;
        max-width: 1280px;

        .categories-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;

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
          color: #fff;
          margin: 10px;
          width: 210px;
          background: linear-gradient(#b33cff, #c168fa);
          box-shadow: 1px 1px 2px #c168fa;
          padding: 10px 0;
          border-radius: 10px;
        }
      `}
    >
      <div className="categories-header">
        <div className="category-main-text">
          <h3>Select a Category</h3>
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
      <div
        className="categories-container"
        css={css`
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          background: #e0e0e0;
        `}
      >
        {categories !== undefined &&
          categories.map((category: string | undefined) => (
            <Link to={`/category/${category}`} key={category}>
              <p
                onClick={(e) => {
                  e.preventDefault;
                  setCategoryName(category);
                }}
              >
                {category}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};
