import React from "react";
import { Link } from "gatsby";

const PriceCard = ({ data }) => {
  const { name, price, icon, lists, url } = data;
  return (
    <div className="single-pricing text-center">
      <span className="price-label">{name}</span>
      <h3>
        <span className="price-currency">$</span>
        {price}
      </h3>
      <i className={icon}></i>
      <div className="line"></div>
      <ul className="list-box">
        {lists.map(({ name }, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <Link to={url} className="thm-btn yellow-bg">
        Select Plan
      </Link>
    </div>
  );
};

export default PriceCard;
