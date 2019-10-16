/* eslint-env jest */
import { defineFeature, loadFeature } from "jest-cucumber";

import {
  thenIShouldSeeXOnThePage,
  thenThePageShouldBeAccessible,
  thenThePageTitleShouldBeX
} from "../helpers/steps/then";
import { whenIVisitX } from "../helpers/steps/when";

defineFeature(loadFeature("./index-page.feature"), test => {
  test("Page has content", ({ when, then, and }) => {
    whenIVisitX(when);
    thenThePageTitleShouldBeX(then);
    thenIShouldSeeXOnThePage(and);
  });

  test("No accessibility violations", ({ when, then }) => {
    whenIVisitX(when);
    thenThePageShouldBeAccessible(then);
  });
});
