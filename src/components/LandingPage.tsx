/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";

interface LandingPageProps {
  categories: any;
}

export const LandingPage: React.FC<LandingPageProps> = ({ categories }) => {
  return (
    <header
      className="LandingPage container"
      css={css`
        .categories-container {
          line-height: 1.3rem;
          margin-bottom: 10px;
        }

        .category {
          &:not(:last-child) {
            margin-right: 10px;
          }

          &:not(:last-child)::after {
            content: "  |";
          }
        }
      `}
    >
      <h1>get started by choosing a category</h1>
      <div className="categories-container">
        {categories.map((category: any) => (
          <span className="category">{category}</span>
        ))}
      </div>
      <div className="header-btns">
        <Link to="/category/:name">
          <h3>show all APIs instead</h3>
        </Link>
        <h3>random api</h3>
      </div>
    </header>
  );
};
