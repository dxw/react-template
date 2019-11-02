import { NextPage } from "next";
import Head from "next/head";
import React from "react";

import MainLayout from "../layouts/MainLayout";

// TODO: Replace this with a real index page.
const IndexPage: NextPage = () => (
  <MainLayout>
    <Head>
      <title>React template - Index</title>
    </Head>

    <h1>Welcome to dxw&apos;s React template!</h1>
  </MainLayout>
);

export default IndexPage;
