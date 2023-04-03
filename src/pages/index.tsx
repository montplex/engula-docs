import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import { Banner } from "../components/homepage/Banner";
import { Cards } from "../components/homepage/Card";




export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <Banner />
      <Cards />
    </Layout>
  );
}
