import React, { Fragment } from "react";
import { Link } from "gatsby";
import { Col, Row } from "react-bootstrap";
import {
  FooterAboutData,
  FooterLinksData,
  FooterPostsData,
  FooterContactData,
  FooterBottomData,
} from "@/data";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="thm-container">
          <Row>
            <Col lg={4}>
              <div className="footer-widget about-widget">
                <div className="title">
                  <h3>{FooterAboutData.title}</h3>
                </div>
                <p>{FooterAboutData.text}</p>

                <form action="#" className="footer-subscribe">
                  <input type="text" name="email" placeholder="Email address" />
                  <button type="submit">
                    <i className="fa fa-angle-right"></i>
                  </button>
                </form>
              </div>
            </Col>
            <Col lg={2}>
              <div className="footer-widget links-widget explore">
                <div className="title">
                  <h3>{FooterLinksData.title}</h3>
                </div>
                <ul className="link-list">
                  {FooterLinksData.links.map(({ url, label }, index) => {
                    return (
                      <li key={index}>
                        <Link to={url}>{label}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div className="footer-widget post-widget services">
                <div className="title">
                  <h3>{FooterPostsData.title}</h3>
                </div>
                <div className="post-widget">
                  {FooterPostsData.posts.map(({ date, title, url }, index) => {
                    return (
                      <div className="single-post-widget" key={index}>
                        <Link to={url} className="date">
                          {date}
                        </Link>
                        <h3 className="post-title">
                          <Link to={url}>{title}</Link>
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="footer-widget contact-widget">
                <div className="title">
                  <h3>{FooterContactData.title}</h3>
                </div>
                {FooterContactData.infos.map(({ text, url }, index) => {
                  return (
                    <p key={index}>
                      <a to={url}>{text}</a>
                    </p>
                  );
                })}
              </div>
            </Col>
          </Row>
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="thm-container clearfix">
          <div className="float-left copy-text">
            <p>
              &copy; Copyright {new Date().getFullYear()} Created by{" "}
              <a to="#">Layerdrops Team</a>
            </p>
          </div>
          <div className="social-box float-right">
            {FooterBottomData.social.map(({ icon, url }, index) => {
              return (
                <a key={index} to={url} className={`${icon} hvr-pulse`}></a>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
