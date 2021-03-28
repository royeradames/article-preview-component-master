import React from "react";
import "./App.scss";
import drawers from "./images/drawers.jpg";
import authorImage from "./images/avatar-michelle.jpg";

function App() {
  return (
    <>
      <main className="page">
        <article className="article">
          <header className="article__header">
            <img src={drawers} alt=" Drawers" />
          </header>
          <h2 className="article__title">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>

          <p className="article__message">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <footer className="article__footer">
            <div className="article__selfie">
              <img src={authorImage} alt="Selfie of Michelle Appleton" />
            </div>
            <h3 className="article__author_name">Michelle Appleton</h3>
            <p className="article__publish_date">28 Jun 2020</p>
            <button className="article__share">Share</button>
          </footer>
        </article>
      </main>
    </>
  );
}

export default App;
