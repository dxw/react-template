/* eslint-env jest */
import React from "react";
import { create } from "react-test-renderer";

import Index from "../../pages/index";

it("renders correctly", () => {
  const component = create(<Index />);

  expect(component.toJSON()).toMatchSnapshot();
});
