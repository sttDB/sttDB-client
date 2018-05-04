import {binding, when, then} from "cucumber-tsflow";
import {browser, by, element} from "protractor";

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

@binding()
export class GeneralSearchSteps{

  private input;

  @when(/^I introduce "([^"]*)" in the search form "([^"]*)"$/)
  public searchForm(command: string, searchId: string, callback): void{
    this.input = element(by.id(searchId));
    this.input.sendKeys(command);
    element(by.buttonText('submit')).click();
    browser.waitForAngular();
    callback();
  }

  @then(/^There are results$/)
  public countResults(callback): void{
    let listOfElements = element(by.css('panel-body'));
    expect(listOfElements.isPresent(), true);
    callback();
  }
}
