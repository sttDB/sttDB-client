import { binding, given } from 'cucumber-tsflow';
import {browser} from 'protractor';
import { NavigationBar } from '../../pages/navbar.page';


@binding()
export class NavbarSteps {
  private navBar = new NavigationBar();

  @given(/^I'm on the home page$/)
  async iGoToHomePage() {
    await browser.get('http://localhost:4200');
  }

  @given(/^I click the navbar option "([^"]*)"$/)
  async iClickMenuOption(option: string) {
    await this.navBar.goToMenuOption(option);
  }
}
