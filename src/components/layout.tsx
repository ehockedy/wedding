/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { PageProps } from "gatsby";
import flowersLeft from "../images/flowers_left.png";
import flowersRight from "../images/flowers_right.png";
import { PageContext } from "./pageContext";
import NavLinks from "./navLinks";

const Footer = () => {
  return (
    <div
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        mt: "-16px",
        zIndex: -1,
      }}
    >
      <img src={flowersLeft} sx={{ height: "240px", userSelect: "none" }} />
      <div sx={{ mb: 2 }}>
        Created by Edward Hockedy and Rosie Keates | Built with{" "}
        <a href="https://www.gatsbyjs.com/">Gatsby</a>
      </div>
      <img src={flowersRight} sx={{ height: "240px", userSelect: "none" }} />
    </div>
  );
};

type LayoutProps = {
  pageProps: PageProps;
  children: React.ReactNode;
};

const Layout = ({ children, pageProps }: LayoutProps) => {
  return (
    <PageContext.Provider value={{ location: pageProps?.location?.pathname }}>
      <div
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          fontFamily: "body",
          mt: 2,
          minHeight: "100vh",
        }}
      >
        <div
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h1
            sx={{
              alignItems: "center",
              display: "flex",
              fontFamily: "heading",
              fontSize: 6,
              my: 3,
            }}
          >
            Rosie and Ed
          </h1>
        </div>
        <NavLinks />
        <main sx={{ flex: 1 }}>{children}</main>
        <Footer />
      </div>
    </PageContext.Provider>
  );
};

export default Layout;
