import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleRoof } from "@fortawesome/free-solid-svg-icons";
function SocialIcon({ icon = faPeopleRoof }) {
  return (
    <div className="icon-container">
      <i>
        <FontAwesomeIcon icon={icon} />
      </i>
    </div>
  );
}

export default SocialIcon;
