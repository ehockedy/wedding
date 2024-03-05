/** @jsx jsx */
import { jsx } from "theme-ui";
import type { HeadFC } from "gatsby";
import { Link } from "gatsby";
import brinsop from "../images/Brinsop-Court-1.webp";

type ResponseButtonProps = {
  text: string;
  linkTarget: string;
}

const ResponseButton = ({ text, linkTarget }: ResponseButtonProps) => <Link
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
    px: 2,
    my: 2,
    ':hover': {
      backgroundColor: 'buttonTint',
      cursor: 'pointer',
    },
    zIndex: [0, 0, 1]
  }}
  to={linkTarget}
>
  {text}
</Link>

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
          mt: 4
        }}
      >
        {/* <ResponseButton text={"Click to RSVP"} linkTarget="rsvp" /> */}
        <ResponseButton text={"Go to food choices"} linkTarget="foodChoices" />
        <span sx={{ my: 2 }}>
          Please respond as soon as possible
        </span>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Rosie and Ed's Wedding - Home</title>;
