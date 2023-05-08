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
          width: ["95%", "100%", null],
          height: "auto",
          mx: 3,
          mt: 3,
          border: "3px solid #896710",
          boxSizing: "border-box",
          p: "4px",
        }}
        alt="Logo"
      />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
