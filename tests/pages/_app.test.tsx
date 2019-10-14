/* eslint-env jest */
import { createRouter } from "next/router";
import React from "react";
import renderer from "react-test-renderer";

import App from "../../pages/_app";
import Index from "../../pages/index";

it("renders correctly", () => {
  const component = renderer.create(
    <App
      pageProps={{}}
      Component={Index}
      router={createRouter("/test-path", {}, "test-as", {
        subscription: jest.fn(),
        initialProps: {},
        pageLoader: jest.fn(),
        Component: Index,
        App,
        wrapApp: jest.fn()
      })}
    />
  );

  expect(component.toJSON()).toMatchSnapshot();
});
