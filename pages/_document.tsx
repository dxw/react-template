import BaseDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class Document extends BaseDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* TODO: Replace the contents of the `style` tag with any global styles, or remove it if it's not applicable. */}
          <style jsx global>
            {`
              body {
                font-family: "Lucida Sans", "Lucida Sans Regular",
                  "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana,
                  sans-serif;
              }
            `}
          </style>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
