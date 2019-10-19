/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DefineStepFunction } from "jest-cucumber";

export const whenIVisitX = (when: DefineStepFunction): void => {
  when(/^I visit (\/.*)$/, async (relativeUrl: string) => {
    await browser!.getRelative(relativeUrl);
  });
};
