import React from "react";

interface CategoryEntryProps {
  entry: any;
}

export const CategoryEntry: React.FC<CategoryEntryProps> = ({ entry }) => {
  return (
    <div>
      <p>{entry.API}</p>
      <p>{entry.Description}</p>
    </div>
  );
};
