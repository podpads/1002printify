import React from "react";
import { Link } from "gatsby";

const ServiceCard = ({ data }) => {
  const { image, url, title, count, price, content } = data;
  return (
    <div className="single-service-three">
      <div className="img-box">
        <img src={image} alt="Awesome Image" />
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
        <p>{content}</p>
        <Link to={url} className="read-more fas fa-angle-right"></Link>
      </div>
    </div>
  );
};

export default ServiceCard;
