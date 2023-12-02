/** @jsx jsx */
import { jsx, ThemeUIStyleObject } from "theme-ui";
import { Link } from "gatsby";
import { useState, Fragment } from "react";

type NavLinkProps = {
  path: string; // page to navigate to
  title: string;
  onClick?: () => void;
};

const NavLink = ({ path, title, onClick }: NavLinkProps) => {
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
      onClick={onClick}
    >
      {title}
    </Link>
  );
};

type NavOptionsProps = { onClick?: () => void };
const NavOptions = ({ onClick }: NavOptionsProps) => (
  <Fragment>
    <NavLink path="/" title="Home" onClick={onClick} />
    <NavLink path="/location/" title="Location" onClick={onClick} />
    <NavLink path="/schedule/" title="Schedule" onClick={onClick} />
    <NavLink path="/rsvp/" title="RSVP" onClick={onClick} />
    <NavLink path="/registry/" title="Gift Registry" onClick={onClick} />
    <NavLink path="/faqs/" title="FAQs" onClick={onClick} />
  </Fragment>
);

const NavOptionsWrapperDT = () => (
  <nav
    sx={{
      fontFamily: "secondary",
      mb: 3,
    }}
  >
    <NavOptions />
  </nav>
);

type NavOptionsWrapperMWProps = { onClick: () => void };
const NavOptionsWrapperMW = ({ onClick }: NavOptionsWrapperMWProps) => (
  <nav
    sx={{
      fontFamily: "secondary",
      display: "flex",
      flexDirection: "column",
      gap: 4,
    }}
  >
    <NavOptions onClick={onClick} />
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

  const closeMenu = () => {
    setOpen(false);
    document.documentElement.classList.remove("bg-fixed");
    document.body.classList.remove("bg-fixed");
  };

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
            onClick={closeMenu}
          >
            &times;
          </button>
        </div>
        <NavOptionsWrapperMW onClick={closeMenu} />
      </div>
    </Fragment>
  );
};

export { NavOptionsWrapperDT as NavLinksDT };
