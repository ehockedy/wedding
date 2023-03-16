import { PageProps } from "gatsby";
import React from "react";
import Layout from "./src/components/layout";

/**
 * Component that wraps each page and provides page props. This removes need to manually wrap each page in
 * the Layout component, and prevents unmounting and re-mounting of it at each page navigation
 * https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement
 */

type WrappedPageProps = {
  // The “Page” React Element built by Gatsby
  element: React.ReactNode;
  // Props object used by page
  props: PageProps;
};

const wrapPageElement = ({ element, props }: WrappedPageProps) => (
  <Layout pageProps={props}>{element}</Layout>
);

export default wrapPageElement;
