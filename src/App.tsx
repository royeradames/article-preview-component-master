import React, { useState } from "react";
import "./App.scss";
import drawers from "./images/drawers.jpg";
import authorImage from "./images/avatar-michelle.jpg";
import shareIcon from "./images/icon-share.svg";
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
          <img
            src={drawers}
            alt=" Drawers"
            className="article__heading-image"
          />

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
