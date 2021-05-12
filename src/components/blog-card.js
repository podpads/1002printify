import React from "react";
import { Link } from "gatsby";

const BlogCard = ({ data }) => {
  const { title, text, image, author, date, commentCount, url } = data;
  return (
    <div className="single-blog-post">
      <div className="text-box hvr-bounce-to-bottom">
        <Link to={url}>
          <h3>{title}</h3>
        </Link>
        <p>{text}</p>
      </div>
      <div className="img-box">
        <img src={image} alt={title} />
        <div className="meta-info">
          <Link to={url}>
            <i className="fas fa-user"></i> by {author}
          </Link>
          <Link to={url}>
            <i className="fas fa-calendar"></i> {date}
          </Link>
          <Link to={url}>
            <i className="fas fa-comments"></i> {commentCount}
          </Link>
        </div>
        <Link to={url} className="read-more fas fa-angle-right"></Link>
      </div>
    </div>
  );
};

export default BlogCard;
