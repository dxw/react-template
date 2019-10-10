import { NextPage } from "next";
import Head from "next/head";
import React from "react";

import Layout from "../components/Layout";

// TODO: Replace this with a real index page.
const Index: NextPage = () => (
  <Layout>
    <Head>
      <title>React template - Index</title>
    </Head>

    <h1>Welcome to dxw&apos;s React template!</h1>
  </Layout>
);

export default Index;
