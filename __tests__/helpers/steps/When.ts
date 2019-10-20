/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DefineStepFunction } from "jest-cucumber";

class When {
  static iVisitX = (when: DefineStepFunction): void => {
    when(/^I visit (\/.*)$/, async (relativeUrl: string) => {
      await browser!.getRelative(relativeUrl);
    });
  };
}

export default When;
