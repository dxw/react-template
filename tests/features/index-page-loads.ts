/* eslint-env jest */
import SingletonWebDriver from "../helpers/webdriver/SingletonWebDriver";

// We expect the test to take a while, by nature.
jest.setTimeout(60000);

test("The index page loads", async () => {
  const driver = SingletonWebDriver.get();

  await driver.getRelative("/");

  await expect(driver.getTitle()).resolves.toEqual("React template - Index");
  await expect(
    driver.findElement({ css: "[data-test=content]" })
  ).resolves.toBeDefined();
});
