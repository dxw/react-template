/* eslint-env jest */
import React from "react";
import renderer from "react-test-renderer";

import Index from "../../pages/index";

it("renders correctly", () => {
  const component = renderer.create(<Index />);

  expect(component.toJSON()).toMatchSnapshot();
});
