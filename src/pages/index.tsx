import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
  return "Welcome to our wedding site";
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
