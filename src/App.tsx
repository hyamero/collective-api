/** @jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "css-maid";

//components
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./components/LandingPage";
import { CategoryResult } from "./components/CategoryResult";
import { AllEntries } from "./components/AllEntries";
import { SearchResult } from "./components/SearchResult";
import { ApiCards } from "./components/ApiCards";
import { Categories } from "./components/Categories";

import background from "./img/Background.jpg";

function App() {
  const [data, setData] = useState<any>();
  const [categories, setCategories] = useState<string | undefined>();
  const [category, setCategory] = useState<string>();
  const [categoryResult, setCategoryResult] = useState<any>();
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

  const getCategoryResult = async (category: string) => {
    const link = "https://api.publicapis.org/entries?category=";
    try {
      const res = await axios.get(`${link}${category}`);
      setCategoryResult(res.data.entries);
      console.log(res.data.entries);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Router>
      <div
        className="App"
        css={css`
          height: 100vh;
          background: url(${background});
          background-size: cover;
          overflow-x: hidden;
          z-index: 1;
        `}
      >
        <Navbar />
        <Switch>
          {showContent && (
            <Route path="/" exact render={() => <LandingPage />} />
          )}

          <Route
            path="/categories"
            exact
            render={() => <Categories categories={categories} />}
          />

          <Route
            path="/category/:name"
            render={() => <ApiCards data={data} showContent={showContent} />}
          />
        </Switch>
        <Global
          styles={css`
            @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

            * {
              margin: auto;
              padding: none;
              box-sizing: border-box;
              font-family: "Poppins", sans-serif;
            }

            .api-card {
              /* display: inline-block; */
              width: 350px;
            }

            .container {
              width: 69%;
              max-width: 1280px;
              margin: auto;
            }
          `}
        />
      </div>
    </Router>
  );
}

export default App;
