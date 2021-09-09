/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";

interface CategoriesProps {
  categories: any;
}

export const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <div
      className="Categories container"
      css={css`
        display: flex;
        flex-flow: row wrap;

        p {
          margin: 20px;
        }
      `}
    >
      {categories.map((category: string | undefined) => (
        <p>{category}</p>
      ))}
    </div>
  );
};
