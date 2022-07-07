import React from "react";
import "./styles.css";
import { Logo, SocialMedia } from "../";
import brush from "../../assets/imgs/BRUSH-3 2.png";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function HeroImage({ text = "No text", logo = "no logo" }) {
  return (
    <div className="hero-image__container">
      <header className="hero-image__header">
        <div className="hero-image__logo">
          <Logo />
        </div>
        <div className="hero-image__social-media">
          <SocialMedia
            socials={[
              {
                icon: faFacebookF,
                url: "https://www.facebook.com/",
                color: "#009CD9",
              },
              {
                icon: faInstagram,
                url: "https://www.instagram.com/",
                color: "#B72C2C",
              },
              {
                icon: faYoutube,
                url: "https://www.youtube.com/",
                color: "#D8AD3D",
              },
            ]}
          />
        </div>
      </header>
      <div className="hero-image__text-styled">
        <h2 className="hero-image__text">
          {text}
          <img className="hero-image__brush" src={brush} />
        </h2>
      </div>
    </div>
  );
}

export default HeroImage;
