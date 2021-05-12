import React, { Fragment } from "react";
import { Logo, errorData } from "@/data";
import { Link } from "gatsby";

const Error = () => {
  return (
    <Fragment>
      <header className="header-404 text-center">
        <div className="thm-container">
          <Link to="/" className="logo">
            <img src={Logo.dark} alt="Awesome Image" />
          </Link>
        </div>
      </header>

      <section className="content-404 text-center sec-pad">
        <div className="thm-container">
          <h2>{errorData.title}</h2>
          <p>{errorData.text}</p>
          <img src={errorData.image} alt="Awesome Image" />
          <Link to="/" className="thm-btn">
            Go Back To Home
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default Error;
