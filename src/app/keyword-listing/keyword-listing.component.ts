import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Page} from "../pager/page";
import {FamilyService} from "../family/family.service";
import {KeywordService} from "./keyword.service";

@Component({
  selector: 'app-keyword-listing',
  templateUrl: './keyword-listing.component.html',
  styleUrls: ['./keyword-listing.component.css']
})
export class KeywordListingComponent implements OnInit {


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

  /**
   * Idealment seria
   * decideServiceMethod
   * useMethodListedFilers
   * showResult
   */

  onSubmit() {
    this.edited = false;
    this.keywordService.getEntityByDescription("family", this.keyword, 0)
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
    this.keywordService.getEntityByDescription("family", this.keyword, wantedPage - 1)
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
