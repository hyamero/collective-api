/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import axios from "axios";
import "css-maid";
import { Styles } from "./config/Styles";
import { RiArrowUpSFill } from "react-icons/ri";

//components
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./components/LandingPage";
import { Categories } from "./components/Categories";
import { CategoryResult } from "./components/CategoryResult";
import { SearchResult } from "./components/SearchResult";
import { AllEntries } from "./components/AllEntries";
import { Loader } from "./components/Loader";
import { Information } from "./components/Information";
import { Footer } from "./components/Footer";

function App() {
  const [allEntries, setAllEntries] = useState<any>();
  const [categories, setCategories] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getCategories();
    getAllEntries();
  }, []);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1700);
  };

  const getAllEntries = async () => {
    try {
      const url = "https://api.publicapis.org/entries";
      const res = await axios.get(url);
      setAllEntries(res.data.entries);
    } catch (err) {
      console.error(err);
    }
  };

  const getCategories = async () => {
    const url = "https://api.publicapis.org/categories";
    try {
      const res = await axios.get(url);
      setCategories(res.data.categories);
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
            opacity: 1;
            z-index: 3;
            cursor: pointer;

            &:hover {
              transform: scale(1.03);
            }
          }

          .icon-up-hidden {
            transition: linear 0.3s;
            height: 35px;
            width: 35px;
            bottom: 8vh;
            right: 2rem;
            border-radius: 50%;
            border: 3px #b642ff solid;
            background: rgba(180, 61, 255, 0.2);
            opacity: 0;
            z-index: 3;
          }
        `}
      >
        <Navbar scroll={scroll} startLoading={startLoading} />

        <RiArrowUpSFill
          className={`${scroll ? "icon-up" : "icon-up-hidden"}`}
          onClick={() => window.scrollTo(0, 0)}
        />
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
                startLoading={startLoading}
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
                startLoading={startLoading}
                getSearchResult={getSearchResult}
                setKeyword={setKeyword}
              />
            )}
          />

          <Route exact path="/information" component={Information} />
        </Switch>
        {!loading && <Footer />}
      </div>
      <Styles />
    </Router>
  );
}

export default App;
