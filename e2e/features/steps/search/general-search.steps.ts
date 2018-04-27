import {binding, when, then} from "cucumber-tsflow";

@binding()
export class GeneralSearchSteps{

  @when(/^I introduce "([^"]*)" in the search form$/)
  public searchForm(command: string): void{

  }

  @then(/^There are more than (\d+) results$/)
  public countResults(): void{

  }
}
