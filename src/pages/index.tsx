/** @jsx jsx */
import { jsx } from "theme-ui";
import type { HeadFC } from "gatsby";
import brinsop from "../images/Brinsop-Court-1.webp";

const IndexPage = () => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <img
        src={brinsop}
        sx={{
          width: "700px",
          height: "auto",
          mx: 3,
          mt: 3,
          border: "3px solid #896710",
          p: "4px",
        }}
        alt="Logo"
      />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
