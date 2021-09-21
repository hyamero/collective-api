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
import { RiArrowUpSFill } from "react-icons/ri";

//components
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./components/LandingPage";
import { Categories } from "./components/Categories";
import { CategoryResult } from "./components/CategoryResult";
import { SearchResult } from "./components/SearchResult";
import { AllEntries } from "./components/AllEntries";
import { Loader } from "./components/Loader";

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
    }, 1700);
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
  const [scrollUp, setScrollUp] = useState(false);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <Router>
      <div
        className="App"
        css={css`
          height: 100vh;
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
            height: 35px;
            width: 35px;
            position: fixed;
            bottom: 10vh;
            right: 2rem;
            border: 3px #b642ff solid;
            background: rgba(180, 61, 255, 0.2);
            border-radius: 50%;
            transition: linear 0.3s;
            z-index: 3;
          }
        `}
      >
        <Navbar scroll={scroll} startLoading={startLoading} />
        {scroll && (
          <RiArrowUpSFill
            className="icon-up"
            onClick={() => window.scrollTo(0, 0)}
          />
        )}
        {loading && <Loader />}
        <Switch>
          <Route
            path="/"
            exact
            render={() => <LandingPage loading={loading} />}
          />

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
                startLoading={startLoading}
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
              scroll-behavior: smooth;
            }

            ::selection {
              background: rgba(180, 61, 255, 0.5);
              color: #1b1b1b;
            }

            ::-webkit-scrollbar {
              width: 4px;
              height: 4px;
              border: 1px solid #d5d5d5;
            }

            ::-webkit-scrollbar-track {
              border-radius: 30px;
              background: #fff;
            }

            ::-webkit-scrollbar-thumb {
              border-radius: 30px;
              background: #7d2ab2;
            }

            .api-card {
              width: 350px;
            }

            .container {
              width: 69%;
              max-width: 1280px;
              margin: auto;
            }

            .container-big {
              width: 80%;
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
