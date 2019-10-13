import { DefineStepFunction } from "jest-cucumber";

import SingletonWebDriver from "../webdriver/SingletonWebDriver";

export const whenIVisitX = (when: DefineStepFunction): void => {
  when(/^I visit (\/.*)$/, async (relativeUrl: string) => {
    const driver = SingletonWebDriver.get();

    await driver.getRelative(relativeUrl);
  });
};
