import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";

const IndexPage = ({ location }: PageProps) => {
  return (
    <Layout currentPage={location.pathname}>Welcome to our wedding site</Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
