import React from "react";
import { Link } from "react-router-dom";

interface LandingPageProps {
  categories: any;
}

export const LandingPage: React.FC<LandingPageProps> = ({ categories }) => {
  return (
    <header className="LandingPage container">
      <h1>get started by choosing a category</h1>
      {categories.map((category: any) => (
        <span>{category}</span>
      ))}
      <div className="header-btns">
        <Link to="/category/:name">
          <h3>show all APIs instead</h3>
        </Link>
        <h3>random api</h3>
      </div>
    </header>
  );
};
