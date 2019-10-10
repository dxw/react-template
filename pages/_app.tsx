import BaseApp from "next/app";
import Head from "next/head";
import React, { Fragment } from "react";

class App extends BaseApp {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <Head>
          <title>
            {/* TODO: Replace this with a base title for the app. */}
            React template
          </title>
        </Head>

        <Component {...pageProps} />
      </Fragment>
    );
  }
}

export default App;
