import React from "react";
import "./styles.css";

function Logo({ logo = "Logo" }) {
  return (
    <div className="logo-container">
      <h1>{logo}</h1>
    </div>
  );
}

export default Logo;
