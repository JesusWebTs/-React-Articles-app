import React from "react";
import "./styles.css";
import { Card, Loader } from "../";

function TilesContainer({ tiles = [] }) {
  return tiles.length > 0 ? (
    <div className="tiles-container">
      {tiles.map((el) => (
        <React.Fragment key={el.id}>
          <Card cardInfo={el} />
        </React.Fragment>
      ))}
    </div>
  ) : (
    <div className="tiles-container__loader">
      <Loader />
    </div>
  );
}

export default TilesContainer;
