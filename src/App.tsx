import React from "react";
import "./App.scss";
import drawers from "./images/drawers.jpg";
import authorImage from "./images/avatar-michelle.jpg";
import shareIcon from "./images/icon-share.svg";

function App() {
  return (
    <>
      <main className="page">
        <article className="article">
          <img
            src={drawers}
            alt=" Drawers"
            className="article__heading-image"
          />

          <div className="article_inner">
            <h2 className="article__title">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h2>
            <p className="article__message">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
            <footer className="article__footer">
              <div>
                <img
                  className="article__selfie"
                  src={authorImage}
                  alt="Selfie of Michelle Appleton"
                />
                <div className="article__info">
                  <h3 className="article__author_name">Michelle Appleton</h3>
                  <p className="article__publish_date">28 Jun 2020</p>
                </div>
              </div>
              <button className="article__share">
                <img src={shareIcon} alt="share" />
              </button>
            </footer>
          </div>
        </article>
      </main>
    </>
  );
}

export default App;
