/** @jsx jsx */
import { jsx, ThemeUIStyleObject } from "theme-ui";
import * as React from "react";
import { PageProps } from "gatsby";
import flowersLeft from "../images/flowers_left.png";
import flowersRight from "../images/flowers_right.png";
import { PageContext } from "./pageContext";
import { NavLinksDT, NavLinksMW } from "./navLinks";

const Footer = () => {
  const flowersStyling: ThemeUIStyleObject = {
    height: "240px",
    userSelect: "none",
    zIndex: -1,
  };
  // TODO use banner across whole bottom on tablet and mobile
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
      <div sx={{ mb: 2, fontSize: 1 }}>
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
            width: "100%",
            position: ["relative", null, null],
            top: [0, null, null],
          }}
        >
          <h1
            sx={{
              alignItems: "center",
              display: "flex",
              fontFamily: "heading",
              fontSize: [4, 6, 6],
              mt: 3,
              mb: 0,
            }}
          >
            Rosie and Ed
          </h1>
          <div
            sx={{
              fontFamily: "body",
              mb: 3,
              fontSize: [2, 3, 3],
            }}
          >
            - 11th May 2024 -
          </div>
          <div
            sx={{
              display: [null, "none", "none"],
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              marginTop: "auto",
              marginBottom: "auto",
              height: "50px",
            }}
          >
            <NavLinksMW />
          </div>
        </div>
        <div sx={{ display: ["none", "initial", "initial"] }}>
          <NavLinksDT />
        </div>
        <main sx={{ flex: 1 }}>{children}</main>
        <Footer />
      </div>
    </PageContext.Provider>
  );
};

export default Layout;
