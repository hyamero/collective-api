/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useEffect } from "react";
import { AllEntries } from "./AllEntries";
import { CategoryEntry } from "./CategoryEntry";
import { Redirect } from "react-router";

interface CategoryResultProps {
  categoryData: any;
}

export const CategoryResult: React.FC<CategoryResultProps> = ({
  categoryData,
}) => {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        top: 0;
        padding: 50px;
        position: absolute;
        background-image: linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%);
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        overflow-x: hidden;
        padding-top: 150px;

        .category-data-container {
          height: 155px;
          width: 440px;
          margin-bottom: 50px;
        }
      `}
    >
      {categoryData !== null && categoryData !== undefined ? (
        categoryData.map((entry: any) => (
          <div key={entry.Link} className="category-data-container">
            <CategoryEntry entry={entry} />
          </div>
        ))
      ) : (
        <Redirect to="/category/all-results" />
        // <AllEntries />
      )}
    </div>
  );
};
