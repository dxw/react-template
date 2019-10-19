/* eslint-disable no-var */
import WebDriverWrapper from "../helpers/webdriver/WebDriverWrapper";

declare global {
  declare var browser: WebDriverWrapper | undefined;

  namespace NodeJS {
    interface Global {
      browser?: WebDriverWrapper;
    }
  }
}
