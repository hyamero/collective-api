/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface SearchResultProps {
  searchResult: any;
}

export const SearchResult: React.FC<SearchResultProps> = ({ searchResult }) => {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
      `}
    >
      <span>search bar lol</span>
    </div>
  );
};
