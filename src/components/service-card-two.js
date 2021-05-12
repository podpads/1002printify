import { Link } from "gatsby";
import React from "react";

const ServiceCardTwo = ({ data }) => {
  const { image, title, count, price, text, url } = data;
  return (
    <div className="single-service-three">
      <div className="img-box">
        <img src={image} alt={title} />
      </div>
      <div className="text-box hvr-bounce-to-bottom">
        <Link to={url}>
          <h3>{title}</h3>
        </Link>
        <div className="meta-info">
          <p>
            {count} cards from <span>${price}</span>
          </p>
        </div>
        <p>{text}</p>
        <Link to={url} className="read-more fas fa-angle-right"></Link>
      </div>
    </div>
  );
};

export default ServiceCardTwo;
