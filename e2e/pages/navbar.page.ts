import { element, by, browser } from 'protractor';

export class NavigationBar {
  private navbar;

  constructor() {
    this.navbar = element(by.id('myNavbar'));
  }

  async goToMenuOption(option: string) {
    await this.navbar.element(by.linkText(option)).click();
    browser.waitForAngular();
  }
}
