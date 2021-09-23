/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";

interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = ({}) => {
  return (
    <main
      css={css`
        #preloader {
          &.preloader {
            display: flex;
            position: fixed;
            top: -4rem;
            left: 0;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
            cursor: default;
            z-index: 9999;

            & .animation-preloader {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              z-index: 1000;

              & p {
                display: flex;
                font-size: 14px;
                font-weight: 500;
                text-transform: uppercase;
                text-align: center;
                justify-content: center;
                letter-spacing: 8px;
                align-items: center;
                margin: 0;
                color: #3b3b3b;

                & span {
                  width: 5px;
                  height: 5px;
                  margin: 5px;
                  border-radius: 50px;
                  background-color: #3b3b3b;
                  animation: fade 1.5s alternate infinite;

                  &:nth-of-type(2) {
                    animation-delay: 0.25s;
                  }

                  &:nth-of-type(3) {
                    animation-delay: 0.5s;
                  }

                  &:nth-of-type(4) {
                    animation-delay: 0.75s;
                  }

                  &:nth-of-type(5) {
                    animation-delay: 1s;
                  }
                }
              }

              & .pulse-loader {
                & .loader-bg {
                  display: flex;
                  width: 100%;
                  height: 100%;
                  justify-content: center;
                  align-items: center;
                  background: transparent;
                  z-index: 999;
                  & .loader-p {
                    position: relative;
                    top: 0;
                    left: 0;
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    border: 0 solid transparent;

                    &::before,
                    &::after {
                      content: "";
                      position: absolute;
                      width: inherit;
                      height: inherit;
                      top: 0;
                      left: 0;
                      opacity: 0;
                      border-radius: 50%;
                      animation: loader 2s linear infinite;
                    }

                    &::before {
                      animation-delay: 1s;
                      border: 1px solid #f1416c;
                    }

                    &::after {
                      border: 1px solid #15e38a;
                    }
                  }
                }
              }

              & .txt-loading {
                font: bold 5em "Poppins", sans-serif;
                text-align: center;
                user-select: none;

                & .letters-loading {
                  position: relative;
                  color: rgba(40, 13, 74, 0.2);

                  &::before {
                    position: absolute;
                    content: attr(data-text-preloader);
                    font-family: "Poppins", sans-serif;
                    left: 0;
                    top: -3px;
                    opacity: 0;
                    color: #280d4a;
                    transform: rotateY(-90deg);
                    animation: letters-loading 4s infinite;
                  }

                  &:nth-child(2)::before {
                    animation-delay: 0.1s;
                  }

                  &:nth-child(3)::before {
                    animation-delay: 0.2s;
                  }

                  &:nth-child(4)::before {
                    animation-delay: 0.3s;
                  }

                  &:nth-child(5)::before {
                    animation-delay: 0.4s;
                  }

                  &:nth-child(6)::before {
                    animation-delay: 0.5s;
                  }

                  &:nth-child(7)::before {
                    animation-delay: 0.6s;
                  }

                  &:nth-child(8)::before {
                    animation-delay: 0.7s;
                  }

                  &:nth-child(9)::before {
                    animation-delay: 0.8s;
                  }

                  &:nth-child(10)::before {
                    animation-delay: 0.9s;
                  }
                }
              }
            }

            & .loader {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              font-size: 0;
              z-index: 1;
              pointer-events: none;

              & .row {
                height: 100%;

                & .loader-section {
                  padding: 0;
                  & .bg {
                    width: 100%;
                    height: 100%;
                    left: 0;
                    background-color: #ffffff;
                    transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);
                  }
                }
              }
            }
          }

          @keyframes loader {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0;
            }
          }

          @keyframes letters-loading {
            0%,
            75%,
            100% {
              opacity: 0;
              -webkit-transform: rotateY(-90deg);
              transform: rotateY(-90deg);
            }
            25%,
            50% {
              opacity: 1;
              -webkit-transform: rotateY(0deg);
              transform: rotateY(0deg);
            }
          }

          @keyframes fade {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        }
      `}
    >
      <div id="preloader" className="preloader">
        <div className="animation-preloader">
          <div className="pulse-loader">
            <div className="loader-bg">
              <div className="loader-p" />
            </div>
          </div>
          <div className="txt-loading">
            <span data-text-preloader="C" className="letters-loading">
              C
            </span>
            <span data-text-preloader="O" className="letters-loading">
              O
            </span>
            <span data-text-preloader="L" className="letters-loading">
              L
            </span>
            <span data-text-preloader="L" className="letters-loading">
              L
            </span>
            <span data-text-preloader="E" className="letters-loading">
              E
            </span>
            <span data-text-preloader="C" className="letters-loading">
              C
            </span>
            <span data-text-preloader="T" className="letters-loading">
              T
            </span>
            <span data-text-preloader="I" className="letters-loading">
              I
            </span>
            <span data-text-preloader="N" className="letters-loading">
              N
            </span>
            <span data-text-preloader="G" className="letters-loading">
              G
            </span>
          </div>
          <p className="text-center">
            Free APIs
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </p>
        </div>
        <div className="loader">
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-left">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
//Loader made by Mustafa Agha
