/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";

import { FiSearch } from "react-icons/fi";

interface CategoriesProps {
  categories: any;
}

export const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <div
      className="Categories"
      css={css`
        width: 80%;
        max-width: 1280px;

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
          categories.map((category: string | undefined) => <p>{category}</p>)}
      </div>
    </div>
  );
};
