import {Page} from "../../pager/page";
import {FamilyService} from "../family.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Component} from "@angular/core";

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html'
})
export class FamilyListComponent {

  public keyword: string;
  public familyForm: FormGroup;
  public errorMessage: string;
  public positions = [];
  public page: Page;
  public edited = false;

  constructor(private fb: FormBuilder,
              private familyService: FamilyService) {
    this.familyForm = fb.group({
      'keyword': ['Description keyword']
    });
  }

  ngOnInit(){

  }

  onSubmit() {
    this.edited = false;
    this.familyService.getFamilyByDescription(this.keyword, 0)
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
    this.familyService.getFamilyByDescription(this.keyword, wantedPage - 1)
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
