/* eslint-env jest */
import React from "react";
import renderer from "react-test-renderer";

import Layout from "./Layout";

it("renders correctly", () => {
  const component = renderer.create(
    <Layout>
      <p>Test content</p>
    </Layout>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
