/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useEffect } from "react";
import { AllEntries } from "./AllEntries";
import { CategoryEntry } from "./CategoryEntry";

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
        position: absolute;
        top: 0;
        background-image: linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%);
      `}
    >
      {categoryData !== null && categoryData !== undefined ? (
        categoryData.map((entry: any) => (
          <div key={entry.Link}>
            <CategoryEntry entry={entry} />
          </div>
        ))
      ) : (
        <AllEntries />
      )}
    </div>
  );
};
