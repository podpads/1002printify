import React from "react";
import { AboutThreeData } from "@/data";
import SectionTitle from "./section-title";
import { Link } from "gatsby";
import { Col, Row } from "react-bootstrap";

const AboutThree = () => {
  const {
    backgroundImage,
    sectionContent,
    content,
    button,
    phone,
    posts,
  } = AboutThreeData;
  return (
    <section className="service-style-one sec-pad">
      <img
        src={backgroundImage}
        className="background-right"
        alt={sectionContent.title}
      />
      <div className="thm-container">
        <Row>
          <Col lg={6}>
            <div className="service-content">
              <SectionTitle data={sectionContent} />
              <p>{content}</p>
              <div className="btn-box">
                <Link to={button.url} className="thm-btn yellow-bg">
                  {button.label}
                </Link>
                <div className="phone-btn">
                  <i className="fas fa-phone"></i>
                  {phone}
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="service-right-content">
              <div className="inner">
                <div className="divider hor"></div>
                <div className="divider ver"></div>
                <Row>
                  {posts.map(({ title, icon, url }, index) => (
                    <Col md={6} key={index}>
                      <div className="single-service-one hvr-bounce-to-bottom">
                        <i className={icon}></i>
                        <Link to={url}>
                          <h3>{title}</h3>
                        </Link>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutThree;
