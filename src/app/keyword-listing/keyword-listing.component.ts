import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Page} from "../pager/page";
import {KeywordService} from "./keyword.service";
import {KeywordCommandParser} from "./keyword-command-parser";

@Component({
  selector: 'app-keyword-listing',
  templateUrl: './keyword-listing.component.html',
  styleUrls: ['./keyword-listing.component.css']
})
export class KeywordListingComponent implements OnInit {

  query = {};
  serviceCallType: any;
  public keyword: string;
  public preListForm: FormGroup;
  public errorMessage: string;
  public positions = [];
  public page: Page;
  public edited = false;

  constructor(private fb: FormBuilder,
              private keywordService: KeywordService) {
    this.preListForm = fb.group({
      'keyword': ['Description keyword']
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    this.edited = false;
    this.serviceCallType = this.decideServiceCall();
    this.getKeywordInfo();
  }

  private decideServiceCall() {
    let commandParser: KeywordCommandParser = new KeywordCommandParser();
    this.query = commandParser.createQuery(this.keyword);
    //find method to be returned
    if (this.query['sign'].length >= 2) {
      return this.keywordService.combinations[this.query['sign'][0] + " " + this.query['sign'][1]];
    } else {
      return this.keywordService.combinations[this.query['sign'][0]];
    }
  }

  private getKeywordInfo() {
    this.serviceCallType("families", this.query['params'], 0)
      .subscribe(
        (page: Page) => {
          this.page = page;
          this.page.pageIndex = page.pageIndex + 1;
          this.positions = this.page.getPaginating(this.page.pageIndex);
          this.edited = true;
        },
        error => this.errorMessage = <any>error.message);
  }

  rePage(wantedPage: number): void {
    if (wantedPage < 1) {
      wantedPage = 1;
    } else if (wantedPage > this.page.totalPages - 1) {
      wantedPage = this.page.totalPages;
    }
    this.serviceCallType("families", this.query['params'], wantedPage - 1)
      .subscribe(
        (page: Page) => {
          this.page = page;
          this.page.pageIndex = page.pageIndex + 1;
          this.positions = this.page.getPaginating(this.page.pageIndex);
          this.edited = true;
        },
        error => this.errorMessage = <any>error.message);
  }

  showPossibleMethods() {
    let introduction = "The user can query keywords by using X [operand] Y.\n For example: (protein AND nucle) OR Glu \n" +
      "Checkout the help screen for further explanation and to see all the possible combinations";
    window.alert(introduction);
  }
}
