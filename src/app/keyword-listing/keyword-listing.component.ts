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
