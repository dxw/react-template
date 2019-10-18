/* eslint-env jest */
import React from "react";
import renderer from "react-test-renderer";

import MainLayout from "./MainLayout";

it("renders correctly", () => {
  const component = renderer.create(
    <MainLayout>
      <p>Test content</p>
    </MainLayout>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
