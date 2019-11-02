import React from "react";
import { create } from "react-test-renderer";

import IndexPage from "../../pages/index";

it("renders correctly", () => {
  const component = create(<IndexPage />);

  expect(component.toJSON()).toMatchSnapshot();
});
