import { Link } from "gatsby";
import React from "react";

const AboutCard = ({ data }) => {
  const { title, text, image, url } = data;
  return (
    <div className="single-about">
      <div className="img-box">
        <img src={image} alt={title} />
      </div>
      <div className="text-box hvr-bounce-to-bottom">
        <Link to={url}>
            <h3>{title}</h3>
        </Link>
        <p>{text}</p>
        <Link to={url} className="read-more fas fa-angle-right">
        </Link>
      </div>
    </div>
  );
};

export default AboutCard;
