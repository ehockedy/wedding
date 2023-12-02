/** @jsx jsx */
import { jsx, ThemeUIStyleObject } from "theme-ui";
import * as React from "react";
import { PageProps } from "gatsby";
import flowersLeft from "../images/flowers_left.png";
import flowersRight from "../images/flowers_right.png";
import flowersMobile from "../images/flowers_mobile.png";
import { PageContext } from "./pageContext";
import { NavLinksDT, NavLinksMW } from "./navLinks";
import { Fragment } from "react";

const FooterText = () => <div sx={{ mb: 2, fontSize: [0, 1, null] }}>
  Created by{" "}
  <a
    href="https://home.edhockedy.com"
    target="_blank"
    sx={{
      textDecoration: 'none',
      fontWeight: 'bold',
      color: "text"
    }}
  >
    Edward Hockedy
  </a>
  {" "}and Rosie Keates | Built with{" "}
  <a
    href="https://www.gatsbyjs.com/"
    target="_blank"
    sx={{
      textDecoration: 'none',
      fontWeight: 'bold',
      color: "text"
    }}
  >
    Gatsby
  </a>
</div>

const FooterDT = () => {
  const flowersStyling: ThemeUIStyleObject = {
    height: "240px",
    userSelect: "none",
    zIndex: -1,
  };
  return (
    <div
      sx={{
        width: "100%",
        display: ["none", "none", "flex"],
        justifyContent: "space-between",
        alignItems: "flex-end",
        mt: "-80px",
      }}
    >
      <img src={flowersLeft} sx={flowersStyling} />
      <FooterText />
      <img src={flowersRight} sx={flowersStyling} />
    </div>
  );
};

const FooterMW = () => {
  return (
    <div
      sx={{
        width: "100%",
        display: [null, null, "none"],
        textAlign: "center",
      }}
    >
      <img
        src={flowersMobile}
        sx={{
          width: "100vw",
          height: [null, "300px", null],
          objectFit: [null, "cover", null],
          objectPosition: "0 0",
        }}
      />
      <FooterText />
      {/* <div sx={{ mb: 2, fontSize: [0, 1, null] }}>
        Created by Edward Hockedy and Rosie Keates | Built with{" "}
        <a href="https://www.gatsbyjs.com/" target="_blank">
          Gatsby
        </a>
      </div> */}
    </div>
  );
};

const Footer = () => (
  <Fragment>
    <FooterDT />
    <FooterMW />
  </Fragment>
);

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
          zIndex: -1,
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
              fontSize: [5, 6, 6],
              mt: 3,
              mb: 0,
              userSelect: "none",
            }}
          >
            Rosie and Ed
          </h1>
          <div
            sx={{
              fontFamily: "body",
              mb: 3,
              fontSize: [2, 3, 3],
              userSelect: "none",
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
        <main sx={{ flex: 1, width: [null, "700px", null], mx: 3 }}>
          {children}
        </main>
        <Footer />
      </div>
    </PageContext.Provider>
  );
};

export default Layout;
