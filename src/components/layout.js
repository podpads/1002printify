import React, { Fragment, useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link as ScrollLink } from "react-scroll";
import MobileMenu from "./mobile-menu";
import { MenuContext } from "@/context/menu-context";

import "@fontsource/pacifico/400.css";
import "@fontsource/rubik/300.css";
import "@fontsource/rubik/300-italic.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/400-italic.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/500-italic.css";
import "@fontsource/rubik/600.css";
import "@fontsource/rubik/600-italic.css";
import "@fontsource/rubik/700.css";
import "@fontsource/rubik/700-italic.css";
import "@fontsource/rubik/800.css";
import "@fontsource/rubik/800-italic.css";
import "@fontsource/rubik/900.css";
import "@fontsource/rubik/900-italic.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/css/animate.min.css";
import "@/plugins/fontawesome-5/css/fontawesome-all.min.css";
import "@/plugins/icofont/css/icofont.css";
import "@/plugins/printify-icon/style.css";
import "@/css/hover.min.css";
import "@/css/style.css";
import "@/css/responsive.css";

const Layout = ({ PageTitle, children }) => {
  const [scrollTop, setScrollTop] = useState(false);
  const { menuStatus } = useContext(MenuContext);
  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [scrollTop]);

  return (
    <Fragment>
      <Helmet>
        <title>
          {PageTitle} - Printify - Printing company GatsbyJS Template
        </title>
      </Helmet>
      <div id="wrapper">{children}</div>

      {true === menuStatus ? <MobileMenu /> : null}
      {scrollTop === true ? (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          className="scroll-to-top scroll-to-target"
        >
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      ) : null}
    </Fragment>
  );
};

export default Layout;
