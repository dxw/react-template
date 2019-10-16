import { DefineStepFunction } from "jest-cucumber";

import SingletonWebDriver from "../webdriver/SingletonWebDriver";

export const thenIShouldSeeXOnThePage = (then: DefineStepFunction): void => {
  then(/^I should see "(.+)" on the page$/, async (content: string) => {
    const driver = SingletonWebDriver.get();

    const element = await driver.findElement({ tagName: "body" });

    await expect(element.getText()).resolves.toContain(content);
  });
};

export const thenThePageTitleShouldBeX = (then: DefineStepFunction): void => {
  then(/^the page title should be "(.+)"$/, async (title: string) => {
    const driver = SingletonWebDriver.get();

    await expect(driver.getTitle()).resolves.toEqual(title);
  });
};
