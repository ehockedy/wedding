/** @jsx jsx */
import { jsx } from "theme-ui";
import { useContext } from "react";
import { Link } from "gatsby";
import { PageContext } from "./pageContext";

type NavLinkProps = {
  path: string; // page to navigate to
  title: string;
};

const NavLink = ({ path, title }: NavLinkProps) => {
  const { location } = useContext(PageContext);
  return (
    <Link
      to={path}
      sx={{
        mx: 3,
        textDecoration: path === location ? "underline" : "none",
      }}
    >
      {title}
    </Link>
  );
};

const NavLinks = () => (
  <nav sx={{ color: "primary" }}>
    <NavLink path="/" title="Home" />
    <NavLink path="/about/" title="About" />
  </nav>
);

export default NavLinks;
