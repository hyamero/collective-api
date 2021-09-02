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
  useEffect(() => {
    getAllEntries();
    setTimeout(() => {
      setShowContent(true);
    }, 3000);
  }, []);

  const [data, setData] = useState<any>();
  const [showContent, setShowContent] = useState<boolean>(false);
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

  return (
    <div
      className="App"
      css={css`
        height: 100vh;
      `}
    >
      <Navbar />
      <ApiCard data={data} showContent={showContent} />
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
