import React from "react";

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
        <h3>list all APIs instead</h3>
        <h3>random api</h3>
      </div>
    </header>
  );
};
