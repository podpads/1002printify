import React from "react";
import { Link } from "gatsby";

const ProjectCard = ({ data }) => {
  const { image, title, category, url } = data;
  return (
    <div className="single-recent-project">
      <div className="img-box">
        <img src={image} alt="Awesome Image" />
      </div>
      <div className="text-box">
        <Link to={url} className="more">
          <i className="fas fa-plus"></i>
        </Link>
        <div className="inner hvr-bounce-to-bottom">
          <span>{category}</span>
          <Link to={url}>
            <h3>{title}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
