/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface SearchResultProps {
  keyword: string;
}

export const SearchResult: React.FC<SearchResultProps> = ({ keyword }) => {
  const getSearchResult = async () => {
    const url = "https://api.publicapis.org/entries?title=";
    try {
      const res = await axios.get(`${url}${keyword}`);
    } catch (err) {
      console.error(err);
    }
  };

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
