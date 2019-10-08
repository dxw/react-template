import renderer from "react-test-renderer";

import Index from "./index";

it("renders correctly", () => {
  const component = renderer.create(<Index />);

  expect(component.toJSON()).toMatchSnapshot();
});
