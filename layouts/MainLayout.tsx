import Head from "next/head";
import React, { Fragment, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: LayoutProps): JSX.Element => (
  <Fragment>
    <Head>
      <title>
        {/* TODO: Replace this with the base title for the service. */}
        React template
      </title>
    </Head>

    {children}

    {/* TODO: Replace the contents of the `style` tag with any global styles, or remove it if it's not applicable. */}
    <style jsx global>
      {`
        body {
          font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        }
      `}
    </style>
  </Fragment>
);

export default MainLayout;
