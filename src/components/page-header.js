import React, { Fragment } from "react";
import { Link } from "gatsby";

const PageHeader = ({ title, name }) => {
  return (
    <Fragment>
      <section className="page-title">
        <div className="thm-container">
          <h3>{title}</h3>
        </div>
      </section>

      <div className="breadcumb-wrapper">
        <div className="thm-container">
          <ul className="breadcumb">
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <span className="sep">-</span>
            </li>
            <li>
              <span>{name}</span>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default PageHeader;
