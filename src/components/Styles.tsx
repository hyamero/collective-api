/** @jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import React from "react";

interface StylesProps {}

export const Styles: React.FC<StylesProps> = ({}) => {
  return (
    <div>
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
            background: #f0f0f2;
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

          .wrapper {
            max-width: 1280px;
            margin: auto;
          }

          .CardSection {
            width: 100vw;
            min-height: 100vh;
            top: 0;
            padding: 50px;
            background: #f0f0f2;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            overflow-x: hidden;
            padding-top: 150px;
            max-width: 1920px;
            margin: auto;
            position: absolute;

            .category-data-container {
              margin: 20px;
            }

            .categories-header {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 15px;
              width: 100vw;
              padding: 0 50px;
              margin-bottom: 70px;
              color: #280d4a;

              h3 {
                max-width: 394px;
                text-align: center;
              }

              a.all-link,
              a.link-public,
              a.link-category {
                font-size: 0.9rem;
                z-index: 2;
                color: #8e4ae3;

                &:hover {
                  color: #b653ff;
                }
              }

              a.link-public::after {
                content: "";
                width: 2px;
                height: 15px;
                background: #8e4ae3;
                display: inline-block;
                position: relative;
                top: 3px;
                margin: 0 10px;
              }

              .category-main-text {
                margin: 0 40px;
                position: relative;
                z-index: 2;

                h3 {
                  font-size: 1.8rem;
                  color: #280d4a;
                }
              }

              .searchbar {
                margin: 0 40px;
                position: relative;

                input {
                  height: 2.2rem;
                  width: 300px;
                  border-top-right-radius: 10px;
                  border-bottom-right-radius: 10px;
                  border: none;
                  font-size: 0.9rem;
                  padding: 0 10px;
                  position: relative;
                  left: 0.9rem;
                  z-index: 2;
                  background: #ffffff;
                }

                .icon-search-container {
                  background: #ffffff;
                  position: absolute;
                  left: -0.9rem;
                  bottom: 0;
                  height: 2.2rem;
                  width: 30px;
                  border-top-left-radius: 10px;
                  border-bottom-left-radius: 10px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  padding-left: 10px;

                  .icon-search {
                    font-size: 1.3rem;
                    color: #757575;
                  }
                }
              }
            }

            .doodle3 {
              position: absolute;
              left: 0;
              top: 2rem;
              height: 250px;
            }
          }

          //Category Entry

          .CategoryEntry {
            width: 410px;
            padding: 25px 30px;
            border-radius: 25px;
            background: #fff;
            box-shadow: 1px 1px 4px #e0e0e0;
            position: relative;
            cursor: pointer;
            overflow: hidden;

            &::after {
              content: "👆";
              font-size: 2rem;

              width: 350px;
              height: 280px;
              padding: 25px 30px;
              border-radius: 25px;
              background: rgba(164, 21, 255, 0.2);
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              transition: 0.3s linear;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 0;
              opacity: 0;
            }

            &:hover {
              &::after {
                opacity: 1;
                height: 280px;
              }
            }

            .api-title-category {
              display: flex;
              flex-wrap: wrap-reverse;
              justify-content: space-between;
              border-bottom: 2px solid #dcdcdc;
              padding: 0 5px 7px 0;

              .api-title {
                font-size: 1rem;
                color: #280d4a;
                display: flex;
                align-items: center;

                .small-text {
                  font-size: 0.85rem;
                }

                h3 {
                  display: inline-block;
                }

                .icon-link {
                  color: #a415ff;
                  font-size: 0.8rem;
                  margin-left: 2px;
                }
              }

              .category-badge {
                background: #b43dff;
                color: #fff;
                font-size: 0.7rem;
                font-weight: 500;
                padding: 4px 10px;
                border-radius: 50px;
                margin-bottom: 5px;
              }
            }

            ul {
              display: flex;
              justify-content: flex-start;
              padding-left: 5px;

              li {
                font-size: 0.8rem;

                span {
                  color: #7500bf;
                }

                &:not(:last-child) {
                  margin-right: 20px;

                  &::after {
                    content: "";
                    height: 15px;
                    width: 1.7px;
                    background: #bababa;
                    display: inline-block;
                    position: relative;
                    left: 7px;
                    top: 3px;
                  }
                }
              }

              li.green {
                &::before {
                  content: "";
                  height: 8px;
                  width: 8px;
                  background: #04f404;
                  border-radius: 50%;
                  display: inline-block;
                  position: relative;
                  right: 5px;
                }
              }

              li.orange {
                &::before {
                  content: "";
                  height: 8px;
                  width: 8px;
                  background: #ff8c00;
                  border-radius: 50%;
                  display: inline-block;
                  position: relative;
                  right: 5px;
                }
              }

              li.red {
                &::before {
                  content: "";
                  height: 8px;
                  width: 8px;
                  background: #ff0800;
                  border-radius: 50%;
                  display: inline-block;
                  position: relative;
                  right: 5px;
                }
              }
            }

            .entry-description {
              margin: 5px 0;
              font-size: 0.9rem;
              color: #515151;
            }
          }
        `}
      />
    </div>
  );
};
