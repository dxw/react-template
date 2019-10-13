/* eslint-env jest */
import { defineFeature, loadFeature } from "jest-cucumber";

import {
  thenIShouldSeeXOnThePage,
  thenThePageTitleShouldBeX
} from "../helpers/steps/then";
import { whenIVisitX } from "../helpers/steps/when";

defineFeature(loadFeature("./index-page.feature"), test => {
  test("Visit /", ({ when, then, and }) => {
    whenIVisitX(when);
    thenThePageTitleShouldBeX(then);
    thenIShouldSeeXOnThePage(and);
  });
});
