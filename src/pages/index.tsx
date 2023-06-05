/** @jsx jsx */
import { jsx } from "theme-ui";
import type { HeadFC } from "gatsby";
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
        attend our big day and can't wait to celebrate with you! We hope the
        site provides all the important information you'll need, but please
        don't hesitate to reach out to either of us with any questions.
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Rosie and Ed's Wedding - Home</title>;
