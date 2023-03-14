/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { Link } from "gatsby";
import flowers from "../images/flowers.png";

type NavLinkProps = {
  path: string; // page to navigate to
  currentPath: string; // page currently on
  title: string;
};

const NavLink = ({ path, title, currentPath }: NavLinkProps) => {
  return (
    <Link
      to={path}
      sx={{
        mx: 3,
        textDecoration: path === currentPath ? "underline" : "none",
      }}
    >
      {title}
    </Link>
  );
};

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
  currentPage: string;
  children: React.ReactNode;
};

const Layout = ({ currentPage, children }: LayoutProps) => {
  return (
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
          sx={{ fontFamily: "heading", display: "flex", alignItems: "center" }}
        >
          Rosie and Ed
        </h1>
        <FlowerGraphic flipX />
      </div>

      <nav sx={{ color: "primary" }}>
        <NavLink path="/" title="Home" currentPath={currentPage} />
        <NavLink path="/about/" title="About" currentPath={currentPage} />
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
