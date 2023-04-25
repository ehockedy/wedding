/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

type NavLinkProps = {
  path: string; // page to navigate to
  title: string;
};

const NavLink = ({ path, title }: NavLinkProps) => {
  return (
    <Link
      to={path}
      activeClassName="active"
      sx={{
        mx: 4,
        px: 1,
        fontFamily: "secondary",
        color: "textSecondary",
        "&.active": {
          color: "textSecondary",
          borderBottomColor: "textSecondary",
          borderBottomStyle: "solid",
          borderBottomWidth: "1px",
          pb: 0,
        },
        letterSpacing: "2px",
        textDecoration: "none",
      }}
    >
      {title}
    </Link>
  );
};

const NavLinks = () => (
  <nav sx={{ color: "primary", fontFamily: "secondary", mb: 3 }}>
    <NavLink path="/" title="Home" />
    <NavLink path="/about/" title="Location" />
    <NavLink path="/day/" title="Schedule" />
    <NavLink path="/rsvp/" title="RSVP" />
  </nav>
);

export default NavLinks;
