/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

interface CategoryEntryProps {
  entry: any;
}

export const CategoryEntry: React.FC<CategoryEntryProps> = ({ entry }) => {
  return (
    <div>
      <div className="api-title">
        <h3>{entry.API}</h3>
        <FiExternalLink />
      </div>
      <p>{entry.Description}</p>
    </div>
  );
};
