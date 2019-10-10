import Head from "next/head";
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div>
    <Head>
      <title>
        {/* TODO: Replace this with a base title for the app. */}
        React template
      </title>
    </Head>

    {children}
  </div>
);

export default Layout;
