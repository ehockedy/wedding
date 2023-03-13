import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Layout from '../components/layout'

const IndexPage: React.FC<PageProps> = () => {
  return <Layout pageTitle="main">
  </Layout>
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
