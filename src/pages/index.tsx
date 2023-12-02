/** @jsx jsx */
import { jsx } from "theme-ui";
import type { HeadFC } from "gatsby";
import { Link } from "gatsby";
import brinsop from "../images/Brinsop-Court-1.webp";

const IndexPage = () => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={brinsop}
        sx={{
          width: ["90vw", "100%", null],
          height: ["150px", "260px", null],
          objectFit: "cover",
          mx: 3,
          border: "3px solid #896710",
          boxSizing: "border-box",
          p: "4px",
        }}
        alt="Logo"
      />
      <div sx={{ textAlign: "justify", my: 3, mx: 4 }}>
        Hello! Welcome to our wedding website. We are so excited to have you
        attend our big day and can't wait to celebrate with you. We hope the
        site provides all the important information you'll need, but please
        don't hesitate to reach out to either of us with any questions.
      </div>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: 4,
          zIndex: 1, // So appears in front of footer
        }}
      >
        <Link
          sx={{
            backgroundColor: 'buttonPrimary',
            border: 'none',
            borderRadius: '18px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            color: "text",
            ':hover': {
              backgroundColor: 'buttonTint',
              cursor: 'pointer',
            },
          }}
          to="rsvp"
        >
          Click to RSVP
        </Link>
        <span sx={{ my: 2 }}>
          Please respond by 1st Feburary
        </span>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Rosie and Ed's Wedding - Home</title>;
