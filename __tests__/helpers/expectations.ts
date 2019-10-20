import kebabCase from "lodash/kebabCase";
import { basename } from "path";
import sharp from "sharp";

import WebDriverWrapper from "./webdriver/WebDriverWrapper";

export const expectScreenshotToMatchSnapshot = async (
  browser: WebDriverWrapper
): Promise<void> => {
  const browserName = browser.browser;

  if (!browser.isSnapshotTestingEnabled()) {
    throw new Error(`Image snapshot testing is not enabled for ${browserName}`);
  }

  let screenshot = await browser.takeScreenshotAsBuffer();
  const screenshotMetadata = await sharp(screenshot).metadata();
  const screenshotWidth = screenshotMetadata.width;
  const windowWidth = await browser.getWindowWidth();

  if (screenshotWidth && screenshotWidth !== windowWidth) {
    screenshot = await sharp(screenshot)
      .resize(windowWidth)
      .toBuffer();
  }

  expect(screenshot).toMatchImageSnapshot({
    customSnapshotIdentifier: ({ testPath, currentTestName, counter }) =>
      kebabCase(
        `${basename(testPath)}-${currentTestName}-${browserName}-${counter}`
      ),
    blur: 1
  });
};
