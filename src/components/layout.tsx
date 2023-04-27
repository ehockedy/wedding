/** @jsx jsx */
import { jsx, ThemeUIStyleObject } from "theme-ui";
import * as React from "react";
import { PageProps } from "gatsby";
import flowersLeft from "../images/flowers_left.png";
import flowersRight from "../images/flowers_right.png";
import { PageContext } from "./pageContext";
import NavLinks from "./navLinks";

const Footer = () => {
  const flowersStyling: ThemeUIStyleObject = {
    height: "240px",
    userSelect: "none",
    zIndex: -1,
  };
  return (
    <div
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        mt: "-80px",
      }}
    >
      <img src={flowersLeft} sx={flowersStyling} />
      <div sx={{ mb: 2 }}>
        Created by Edward Hockedy and Rosie Keates | Built with{" "}
        <a href="https://www.gatsbyjs.com/" target="_blank">
          Gatsby
        </a>
      </div>
      <img src={flowersRight} sx={flowersStyling} />
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
          minHeight: "100vh",
        }}
      >
        <div
          sx={{
            mx: 3,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1
            sx={{
              alignItems: "center",
              display: "flex",
              fontFamily: "heading",
              fontSize: 6,
              mt: 3,
              mb: 0,
            }}
          >
            Rosie and Ed
          </h1>
          <div sx={{ fontFamily: "body", fontSize: 3, mb: 3 }}>
            - 11th May 2024 -
          </div>
        </div>
        <NavLinks />
        <main sx={{ flex: 1 }}>{children}</main>
        <Footer />
      </div>
    </PageContext.Provider>
  );
};

export default Layout;
