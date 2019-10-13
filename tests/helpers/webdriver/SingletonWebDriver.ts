import { Browser, Builder } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";
import firefox from "selenium-webdriver/firefox";

import WebDriverWrapper from "./WebDriverWrapper";

type SingletonWebDriverCreateOptions = {
  browser?: string;
  headless?: boolean;
  baseUrl?: string;
};

class SingletonWebDriver {
  private static driver: WebDriverWrapper | undefined;

  static async create({
    browser = Browser.CHROME,
    headless = true,
    baseUrl
  }: SingletonWebDriverCreateOptions = {}): Promise<WebDriverWrapper> {
    if (this.driver) {
      await this.quit();
    }

    const chromeOptions = new chrome.Options();
    const firefoxOptions = new firefox.Options();

    if (headless) {
      chromeOptions.addArguments("--headless", "--disable-gpu");
      firefoxOptions.headless();
    }

    const builder = new Builder()
      .forBrowser(browser)
      .setChromeOptions(chromeOptions)
      .setFirefoxOptions(firefoxOptions);

    this.driver = new WebDriverWrapper(await builder.build(), baseUrl);

    return this.driver;
  }

  static get(): WebDriverWrapper {
    if (!this.driver) {
      throw new Error(
        "There is no driver. Call SingletonWebDriver.create() to create one."
      );
    }

    return this.driver;
  }

  static async quit(): Promise<void> {
    if (this.driver) {
      await this.driver.quit();

      this.driver = undefined;
    }
  }
}

export default SingletonWebDriver;
