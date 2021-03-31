import React, { useState } from "react";
import "./App.scss";
import drawersMobile from "./images/drawers.jpg";
import drawersDesktop from "./images/drawersDesktop.jpg";

import authorImage from "./images/avatar-michelle.jpg";
import twitterIcon from "./images/icon-twitter.svg";
import facebookIcon from "./images/icon-facebook.svg";
import pinterestIcon from "./images/icon-pinterest.svg";

function App() {
  const [isShare, setIsShare] = useState(false);
  const share = (
    isShare: boolean,
    setIsShare: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setIsShare(!isShare);
  };
  return (
    <>
      <main className="page">
        <article className="article">
          <picture className="article__heading-image">
            <source media="(min-width:710px)" srcSet={drawersDesktop} />
            <img src={drawersMobile} alt=" Drawers" />
          </picture>

          <h2 className="article__title">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p className="article__message">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>

          <footer
            className={`article__footer ${
              isShare ? "article__footer--share-actived" : ""
            }`}
          >
            <div
              className={`article__share-section ${
                isShare ? "article__share-section--active" : ""
              }`}
            >
              <h2 className="article__share-title">SHARE</h2>
              <img
                src={facebookIcon}
                alt=" facebook icon"
                className="article__icon"
              />
              <img
                src={twitterIcon}
                alt="twitter icon"
                className="article__icon"
              />
              <img
                src={pinterestIcon}
                alt="pinterest icon"
                className="article__icon"
              />
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                className="svg-inline--fa fa-caret-down fa-w-10 article__share-section-pointing-square"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="hsl(217, 19%, 35%)"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </div>
            <div
              className={`article__author ${
                isShare ? "article__author--share-actived" : ""
              }`}
            >
              <img
                className="article__selfie"
                src={authorImage}
                alt="Selfie of Michelle Appleton"
              />
              <h3 className="article__author_name">Michelle Appleton</h3>
              <p className="article__publish_date">28 Jun 2020</p>
            </div>
            <button
              onClick={() => share(isShare, setIsShare)}
              className={`article__share-button ${
                isShare ? "article__share-button--active" : ""
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                <path
                  className={`${
                    isShare ? "article__share-button--active" : ""
                  }`}
                  fill="#6E8098"
                  d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                />
              </svg>
            </button>
          </footer>
        </article>
      </main>
    </>
  );
}

export default App;
