import React, { useState } from "react";
import "./styles.css";

function Card({ cardInfo }) {
  const { category, title, image, content, url, createdAt, id } = cardInfo;
  let [_category, setCategory] = useState(category);
  return (
    <article className="card-container" id={id}>
      <img className="card-container__img" src={image} />
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
