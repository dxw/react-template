import NextApp from "next/app";

import App from "../../pages/_app";

it("is identical to next/app", () => {
  expect(App).toStrictEqual(NextApp);
});
