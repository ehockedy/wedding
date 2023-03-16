/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { PageProps } from "gatsby";
import flowers from "../images/flowers.png";
import { PageContext } from "./pageContext";
import NavLinks from "./navLinks";

// https://www.pngaaa.com/detail/111349
const FlowerGraphic = ({ flipX }: { flipX?: boolean }) => (
  <img
    sx={{
      width: "200px",
      transform: flipX ? "scale(-1)" : "scaleY(-1)",
      mx: 3,
    }}
    src={flowers}
  />
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <FlowerGraphic />
          <h1
            sx={{
              fontFamily: "heading",
              display: "flex",
              alignItems: "center",
            }}
          >
            Rosie and Ed
          </h1>
          <FlowerGraphic flipX />
        </div>
        <NavLinks />
        <main>{children}</main>
      </div>
    </PageContext.Provider>
  );
};

export default Layout;
