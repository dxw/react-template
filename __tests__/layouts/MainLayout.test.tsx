/* eslint-env jest */
import React from "react";
import { create } from "react-test-renderer";

import MainLayout from "../../layouts/MainLayout";

it("renders correctly", () => {
  const component = create(
    <MainLayout>
      <p>Test content</p>
    </MainLayout>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
