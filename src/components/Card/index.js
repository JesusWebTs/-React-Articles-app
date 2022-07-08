import React, { useState, useEffect } from "react";
import Loader from "../Loader";
import "./styles.css";

function Card({ cardInfo }) {
  const { category, title, image, content, url, createdAt, id } = cardInfo;
  let [_category, setCategory] = useState(category);
  const [loaded, setLoaded] = useState(true);
  const [_img, setImg] = useState();

  return (
    <article className="card-container" id={id}>
      <div className="car-container__img-container">
        <img
          className="card-container__img"
          src={image}
          onLoad={() => setLoaded(false)}
        />
        {loaded ? (
          <div className="card-container__loader">
            <Loader />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="card-container__text">
        <header className="card-container__header">
          <h3>{title}</h3>
        </header>
        <p>{content}</p>
      </div>
      <a className="card-container__see-more" href={url} target="_blank">
        VER MÁS
      </a>
    </article>
  );
}

export default Card;
