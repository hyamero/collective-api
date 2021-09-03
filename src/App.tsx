/** @jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "css-maid";

//components
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./components/LandingPage";
import { CategoryResult } from "./components/CategoryResult";
import { AllEntries } from "./components/AllEntries";
import { SearchResult } from "./components/SearchResult";
import { ApiCard } from "./components/ApiCard";

function App() {
  const [data, setData] = useState<any>();
  const [categories, setCategories] = useState<string | undefined>();
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    getAllEntries();
    getCategories();
    setTimeout(() => {
      setShowContent(true);
    }, 3000);
  }, []);

  const getAllEntries = async () => {
    try {
      const url = "https://api.publicapis.org/entries";
      const res = await axios.get(url);
      setData(res.data.entries);
      console.log(res.data.entries);
    } catch (err) {
      console.error(err);
    }
  };

  const getCategories = async () => {
    const url = "https://api.publicapis.org/categories";
    try {
      const res = await axios.get(url);
      setCategories(res.data);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="App"
      css={css`
        height: 100%;
      `}
    >
      <Navbar />
      <ApiCard data={data} showContent={showContent} />
      <LandingPage categories={categories} />
      <Global
        styles={css`
          * {
            margin: auto;
            padding: none;
            box-sizing: border-box;
          }

          .api-card {
            /* display: inline-block; */
            width: 350px;
          }

          .container {
            width: 80%;
            max-width: 1280px;
            margin: auto;
          }
        `}
      />
    </div>
  );
}

export default App;
