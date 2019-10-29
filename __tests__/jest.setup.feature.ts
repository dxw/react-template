/* eslint-env jest */
import { setJestCucumberConfiguration } from "jest-cucumber";
import { Browser } from "selenium-webdriver";
import yn from "yn";

import { expectPageToMatchSnapshot } from "./helpers/expectations";
import WebDriverWrapper from "./helpers/webdriver/WebDriverWrapper";

const TEST_BROWSER = process.env.TEST_BROWSER || Browser.CHROME;

jest.setTimeout(60 * 1000);

setJestCucumberConfiguration({ loadRelativePath: true });

beforeEach(async () => {
  global.browser = await WebDriverWrapper.create({
    browser: TEST_BROWSER,
    headless: yn(process.env.TEST_HEADLESS, { default: true }),
    baseUrl: `http://localhost:${process.env.PORT || 3000}`
  });
});

afterEach(async () => {
  const oldBrowser = global.browser;

  delete global.browser;

  if (oldBrowser) {
    if (TEST_BROWSER === Browser.CHROME) {
      await expectPageToMatchSnapshot(oldBrowser);
    }

    await oldBrowser.quit();
  }
});
