/* eslint-disable @typescript-eslint/camelcase*/
import {
  Actions,
  Capabilities,
  FileDetector,
  Locator,
  Navigation,
  Options,
  Session,
  TargetLocator,
  WebDriver,
  WebElement,
  WebElementCondition,
  WebElementPromise
} from "selenium-webdriver";
import { Executor } from "selenium-webdriver/http";
import { Command } from "selenium-webdriver/lib/command";

class WebDriverWrapper implements WebDriver {
  readonly driver: WebDriver;
  readonly baseUrl?: string;

  constructor(driver: WebDriver, baseUrl?: string) {
    this.driver = driver;
    this.baseUrl = baseUrl;
  }

  async getRelative(relativeUrl: string): Promise<void> {
    if (!this.baseUrl) {
      throw new Error(`No base URL is set to make ${relativeUrl} relative to.`);
    }

    const url = new URL(relativeUrl, this.baseUrl).href;

    return this.get(url);
  }

  /* WebDriver methods */

  async execute<T>(command: Command, description?: string): Promise<T> {
    return this.driver.execute(command, description);
  }

  setFileDetector(detector: FileDetector): void {
    this.driver.setFileDetector(detector);
  }

  getExecutor(): Executor {
    return this.driver.getExecutor();
  }

  async getSession(): Promise<Session> {
    return this.driver.getSession();
  }

  async getCapabilities(): Promise<Capabilities> {
    return this.driver.getCapabilities();
  }

  async quit(): Promise<void> {
    return this.driver.quit();
  }

  actions(
    options?:
      | { async: boolean; bridge: boolean }
      | { async: boolean }
      | { bridge: boolean }
      | undefined
  ): Actions {
    return this.driver.actions(options);
  }

  executeScript<T>(
    script: string | Function,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...var_args: any[]
  ): Promise<T> {
    return this.driver.executeScript(script, var_args);
  }

  executeAsyncScript<T>(
    script: string | Function,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...var_args: any[]
  ): Promise<T> {
    return this.driver.executeAsyncScript(script, var_args);
  }

  wait(
    condition: WebElementCondition,
    opt_timeout?: number | undefined,
    opt_message?: string | undefined
  ): WebElementPromise {
    return this.driver.wait(condition, opt_timeout, opt_message);
  }

  async sleep(ms: number): Promise<void> {
    return this.driver.sleep(ms);
  }

  async getWindowHandle(): Promise<string> {
    return this.driver.getWindowHandle();
  }

  async getAllWindowHandles(): Promise<string[]> {
    return this.driver.getAllWindowHandles();
  }

  async getPageSource(): Promise<string> {
    return this.driver.getPageSource();
  }

  async getCurrentUrl(): Promise<string> {
    return this.driver.getCurrentUrl();
  }

  async close(): Promise<void> {
    return this.driver.close();
  }

  async get(url: string): Promise<void> {
    return this.driver.get(url);
  }

  async getTitle(): Promise<string> {
    return this.driver.getTitle();
  }

  findElement(locator: Locator): WebElementPromise {
    return this.driver.findElement(locator);
  }

  async findElements(locator: Locator): Promise<WebElement[]> {
    return this.driver.findElements(locator);
  }

  async takeScreenshot(): Promise<string> {
    return this.driver.takeScreenshot();
  }

  manage(): Options {
    return this.driver.manage();
  }

  navigate(): Navigation {
    return this.driver.navigate();
  }

  switchTo(): TargetLocator {
    return this.driver.switchTo();
  }
}

export default WebDriverWrapper;
