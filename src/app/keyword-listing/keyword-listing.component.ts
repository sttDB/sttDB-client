import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Page} from "../pager/page";
import {KeywordService} from "./keyword.service";

@Component({
  selector: 'app-keyword-listing',
  templateUrl: './keyword-listing.component.html',
  styleUrls: ['./keyword-listing.component.css']
})
export class KeywordListingComponent implements OnInit {

  query = {params: [], sign: []};
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

  //TO DO: refactor this shitty method
  private decideServiceCall() {
    this.query = {params: [], sign: []};
    /*This should be refactored into a class TO DO*/
    if(this.keyword.search(" AND | and | or | OR | NOT | not ") == -1){
      this.query.params.push(this.keyword);
      return this.keywordService.combinations.simple;
    }
    // parse the two lines
    let outerCondition = this.keyword.split(" ").join("");
    let innerConditionStart = outerCondition.search("\\(");
    let innerConditionEnd = outerCondition.search("\\)");
    let innerCondition = outerCondition.substring(innerConditionStart, innerConditionEnd+1);
    outerCondition = outerCondition.replace(innerCondition, ""); // outter parentheses
    innerCondition = innerCondition.substring(innerConditionStart+1, innerConditionEnd); // inner parentheses
    let s;
    //find first condition
    if(innerCondition.search("AND|and") != -1){
      this.query.sign.push("AND");
      s = innerCondition.split(/AND|and/);
    }else if(innerCondition.search("OR|or") != -1){
      this.query.sign.push("OR");
      s = innerCondition.split(/OR|or/);
    }else if(innerCondition.search("NOT|not") != -1){
      this.query.sign.push("NOT");
      s = innerCondition.split(/NOT|not/);
    }
    this.query.params.push(s[0]);
    this.query.params.push(s[1]);
    let x;
    //find second condition
    if(outerCondition.search("AND|and") != -1){
      this.query.sign.push("AND");
      x = outerCondition.split(/AND|and/).join("");
    }else if(outerCondition.search("OR|or") != -1){
      this.query.sign.push("OR");
      x = outerCondition.split(/OR|or/).join("");
    }else if(outerCondition.search("NOT|not") != -1){
      this.query.sign.push("NOT");
      x = outerCondition.split(/NOT|not/).join("");
    }
    this.query.params.push(x);
    //find method to be returned
    if(this.query.sign.length >= 2){
      console.log(this.query.sign[0] + " " + this.query.sign[1]);
      console.log(this.query.params);
      return this.keywordService.combinations[this.query.sign[0] + " " + this.query.sign[1]];
    }else{
      console.log("b");
      return this.keywordService.combinations[this.query.sign[0]];
    }
  }

  private getKeywordInfo() {
    this.serviceCallType("families", this.query.params, 0)
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
    this.keywordService.getEntityByDescription("families", this.query.params, wantedPage - 1)
      .subscribe(
        (page: Page) => {
          this.page = page;
          this.page.pageIndex = page.pageIndex + 1;
          this.positions = this.page.getPaginating(this.page.pageIndex);
          this.edited = true;
        },
        error => this.errorMessage = <any>error.message);
  }
}
