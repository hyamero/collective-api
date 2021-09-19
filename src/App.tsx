/** @jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import axios from "axios";
import "css-maid";
import { FiArrowUpCircle } from "react-icons/fi";

//components
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./components/LandingPage";
import { Categories } from "./components/Categories";
import { CategoryResult } from "./components/CategoryResult";
import { SearchResult } from "./components/SearchResult";

import background from "./img/Background.jpg";
import { AllEntries } from "./components/AllEntries";

function App() {
  const [allEntries, setAllEntries] = useState<any>();
  const [categories, setCategories] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getCategories();
    getAllEntries();
    startLoading();
  }, []);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("timer stopped");
    }, 2000);
  };

  const getAllEntries = async () => {
    try {
      const url = "https://api.publicapis.org/entries";
      const res = await axios.get(url);
      setAllEntries(res.data.entries);
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

  //Call by Category Name
  const [categoryName, setCategoryName] = useState<string>();
  const [categoryData, setCategoryData] = useState<any>();

  useEffect(() => {
    getCategoryData();
  }, [categoryName]);

  useEffect(() => {
    getCategoryData();
  }, []);

  const getCategoryData = async () => {
    const url = "https://api.publicapis.org/entries?category=";
    try {
      const res = await axios.get(`${url}${categoryName}`);
      setCategoryData(res.data.entries);
    } catch (err) {
      console.error(err);
    }
  };

  //Call by keywords
  const [keyword, setKeyword] = useState<string>("");
  const [searchResult, setSearchResult] = useState<any>();

  const getSearchResult = async () => {
    const url = "https://api.publicapis.org/entries?title=";
    try {
      const res = await axios.get(`${url}${keyword}`);
      setSearchResult(res.data.entries);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  //Scroll check
  const [scrollDown, setScrollDown] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  //Scroll Down
  // const drinkEndRef = useRef<any>(null);

  // const scrollToBottom = () => {
  //   drinkEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // useEffect(() => {
  //   if (scrollDown || !scrollDown) scrollToBottom();
  // }, [scrollDown]);

  //Scroll Up
  const startRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    startRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (scrollUp || !scrollUp) scrollToTop();
  }, [scrollUp]);

  return (
    <Router>
      <div
        className="App"
        css={css`
          height: 100vh;
          /* background: url(${background}); */
          background-size: cover;
          overflow-x: hidden;
          z-index: 1;

          .up-ref {
            width: 20px;
            height: 20px;
            position: absolute;
            top: 0;
          }

          .icon-up {
            color: #000;
            height: 40px;
            width: 40px;
            position: absolute;
            top: 50vh;
            right: 3rem;
            z-index: 3;
          }
        `}
      >
        <Navbar />
        <div className="up-ref" ref={startRef}></div>
        <FiArrowUpCircle
          className="icon-up"
          onClick={() => setScrollUp(!scrollUp)}
        />
        <Switch>
          <Route path="/" exact render={() => <LandingPage />} />

          <Route
            path="/category"
            exact
            render={() => (
              <Categories
                categories={categories}
                setCategoryName={setCategoryName}
                startLoading={startLoading}
              />
            )}
          />

          <Route
            path="/api-results"
            exact
            render={() => (
              <AllEntries
                allEntries={allEntries}
                loading={loading}
                keyword={keyword}
                setKeyword={setKeyword}
                getSearchResult={getSearchResult}
              />
            )}
          />

          <Route
            path="/category/:name"
            render={() => (
              <CategoryResult
                categoryData={categoryData}
                loading={loading}
                categoryName={categoryName}
                keyword={keyword}
                setKeyword={setKeyword}
                getSearchResult={getSearchResult}
              />
            )}
          />

          <Route
            exact
            path="/search/:keyword"
            render={() => (
              <SearchResult
                searchResult={searchResult}
                loading={loading}
                keyword={keyword}
              />
            )}
          />
        </Switch>
        <Global
          styles={css`
            @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

            * {
              margin: none;
              padding: none;
              box-sizing: border-box;
              font-family: "Poppins", sans-serif;
            }

            body,
            html {
              overflow-x: hidden;
            }

            .api-card {
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
