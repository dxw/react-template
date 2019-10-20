import prettier from "prettier";

import WebDriverWrapper from "./webdriver/WebDriverWrapper";

export const expectPageToMatchSnapshot = async (
  browser: WebDriverWrapper
): Promise<void> => {
  const rootElement = await browser.findElement({ id: "__next" });
  const rootElementSource = await rootElement.getAttribute("innerHTML");

  expect(
    prettier.format(rootElementSource, { parser: "html" })
  ).toMatchSnapshot();
};
