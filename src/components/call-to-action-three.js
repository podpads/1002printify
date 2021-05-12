import React from "react";
import { CallToActionTwoData } from "@/data";
import SectionTitle from "./section-title";
import { Link } from "gatsby";

const CallToActionThree = () => {
  const { sectionContent, content, button, image } = CallToActionTwoData;
  return (
    <section className="cta-style-two">
      <div className="thm-container">
        <div className="row">
          <div className="col-xl-6 col-lg-12">
            <div className="image-block float-right">
              <img src={image.name} alt="Awesome Image" />
              <div className="content-block">
                <h3>{image.caption}</h3>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="cta-style-two-content">
              <SectionTitle data={sectionContent} />
              <p>{content}</p>
              <Link to={button.url} className="thm-btn yellow-bg">
                {button.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionThree;
