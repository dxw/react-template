/* eslint-env jest */
import { setJestCucumberConfiguration } from "jest-cucumber";
import { toMatchImageSnapshot } from "jest-image-snapshot";
import { Browser } from "selenium-webdriver";
import yn from "yn";

import { expectScreenshotToMatchSnapshot } from "./helpers/expectations";
import WebDriverWrapper from "./helpers/webdriver/WebDriverWrapper";

expect.extend({ toMatchImageSnapshot });

jest.setTimeout(60 * 1000);

setJestCucumberConfiguration({ loadRelativePath: true });

beforeEach(async () => {
  global.browser = await WebDriverWrapper.create({
    browser: process.env.TEST_BROWSER || Browser.CHROME,
    headless: yn(process.env.TEST_HEADLESS, { default: true }),
    baseUrl: `http://localhost:${process.env.PORT || 3000}`,
    enabledSnapshotBrowsers: yn(process.env.TEST_FEATURE_SNAPSHOTS, {
      default: true
    })
      ? process.env.TEST_FEATURE_SNAPSHOT_BROWSERS
        ? process.env.TEST_FEATURE_SNAPSHOT_BROWSERS.split(",")
        : [Browser.CHROME]
      : []
  });
});

afterEach(async () => {
  const oldBrowser = global.browser;

  delete global.browser;

  if (oldBrowser) {
    if (oldBrowser.isSnapshotTestingEnabled()) {
      await expectScreenshotToMatchSnapshot(oldBrowser);
    }

    await oldBrowser.quit();
  }
});
