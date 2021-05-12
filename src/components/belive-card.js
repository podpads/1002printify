import { Link } from "gatsby";
import React from "react";

const BeliveCard = ({ data }) => {
  const { image, title, text, url } = data;
  return (
    <div className="single-we-believe text-center">
      <div className="img-box">
        <img src={image} alt={title} />
      </div>
      <div className="text-box">
        <h3>{title}</h3>
        <p>{text}</p>
        <Link to={url} className="thm-btn yellow-bg">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default BeliveCard;
