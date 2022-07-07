import React from "react";
import "./styles.css"
import { Card } from "../";

function TilesContainer({ tiles = [] }) {
  console.log(tiles);
  return (
    <div className="tiles-container">
      {tiles.map((el) => (
        <React.Fragment key={el.id}>
          <Card cardInfo={el} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default TilesContainer;
