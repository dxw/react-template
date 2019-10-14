/* eslint-env jest */
import { advanceTo, clear } from "jest-date-mock";
import React from "react";
import renderer from "react-test-renderer";

import Document from "../../pages/_document";

beforeAll(() => {
  advanceTo(new Date("2019-01-01T00:00:00.000Z"));
});

afterAll(() => {
  clear();
});

it("renders correctly", () => {
  const component = renderer.create(
    <Document
      html="<div>test-html</div>"
      __NEXT_DATA__={{
        dataManager: "test-data-manager",
        props: {},
        page: "/test-page",
        query: {},
        buildId: "test-build"
      }}
      dangerousAsPath="/test-dangerous-as-path"
      ampPath="/test-amp-path"
      inAmpMode={false}
      hybridAmp={false}
      staticMarkup={false}
      isDevelopment={false}
      hasCssMode={false}
      devFiles={[]}
      files={[]}
      dynamicImports={[]}
      canonicalBase="http://localhost:3000/"
    />
  );

  expect(component.toJSON()).toMatchSnapshot();
});
