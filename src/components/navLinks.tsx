/** @jsx jsx */
import { jsx, ThemeUIStyleObject } from "theme-ui";
import { Link } from "gatsby";
import { useState, Fragment, useEffect } from "react";

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

const NavOptions = () => (
  <Fragment>
    <NavLink path="/" title="Home" />
    <NavLink path="/location/" title="Location" />
    <NavLink path="/schedule/" title="Schedule" />
    <NavLink path="/rsvp/" title="RSVP" />
  </Fragment>
);

const NavOptionsWrapperDT = () => (
  <nav
    sx={{
      color: "primary",
      fontFamily: "secondary",
      mb: 3,
    }}
  >
    <NavOptions />
  </nav>
);

const NavOptionsWrapperMW = () => (
  <nav
    sx={{
      color: "primary",
      fontFamily: "secondary",
      display: "flex",
      flexDirection: "column",
      gap: 4,
    }}
  >
    <NavOptions />
  </nav>
);

const MenuIcon = () => {
  const menuIconBarStyle: ThemeUIStyleObject = {
    width: "20px",
    height: "2px",
    mb: 1,
    backgroundColor: "textSecondary",
  };
  return (
    <Fragment>
      <div sx={menuIconBarStyle} />
      <div sx={menuIconBarStyle} />
      <div sx={menuIconBarStyle} />
    </Fragment>
  );
};

export const NavLinksMW = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <button
        sx={{ all: "unset", fontSize: 5, lineHeight: "20px", m: 3 }}
        onClick={() => {
          setOpen(true);
          document.documentElement.classList.add("bg-fixed");
          document.body.classList.add("bg-fixed");
        }}
      >
        <MenuIcon />
      </button>
      <div
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: open ? "shadow" : "invisible",
          position: "fixed",
          top: 0,
          left: open ? "0%" : "-100%",
          transition: "background-color .5s",
        }}
      ></div>
      <div
        sx={{
          position: "fixed",
          top: 0,
          left: open ? "0%" : "-100%",
          transition: "left .5s",
          height: "100vh",
          width: "80vw",
          backgroundColor: "background",
        }}
      >
        <div
          sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <button
            sx={{ all: "unset", fontSize: 5, lineHeight: "20px", m: 3 }}
            onClick={() => {
              setOpen(false);
              document.documentElement.classList.remove("bg-fixed");
              document.body.classList.remove("bg-fixed");
            }}
          >
            &times;
          </button>
        </div>
        <NavOptionsWrapperMW />
      </div>
    </Fragment>
  );
};

export { NavOptionsWrapperDT as NavLinksDT };
