/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { axe } from "jest-axe";
import { DefineStepFunction } from "jest-cucumber";

export const thenIShouldSeeXOnThePage = (then: DefineStepFunction): void => {
  then(/^I should see "(.+)" on the page$/, async (content: string) => {
    const element = await browser!.findElement({ tagName: "body" });

    await expect(element.getText()).resolves.toContain(content);
  });
};

export const thenThePageTitleShouldBeX = (then: DefineStepFunction): void => {
  then(/^the page title should be "(.+)"$/, async (title: string) => {
    await expect(browser!.getTitle()).resolves.toEqual(title);
  });
};

export const thenThePageShouldBeAccessible = (
  then: DefineStepFunction
): void => {
  then("the page should be accessible", async () => {
    const document = await browser!.getPageSource();

    expect(await axe(document)).toHaveNoViolations();
  });
};
