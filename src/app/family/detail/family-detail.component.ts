import {Component, OnInit} from "@angular/core";
import {Family} from "../family";
import {ActivatedRoute} from "@angular/router";
import {FamilyService} from "../family.service";
import {Page} from "../../pager/page";

@Component({
  selector: 'app-family-detail',
  templateUrl: './family-detail.component.html',
  styleUrls: ['family-detail-component.css']
})
export class FamilyDetailComponent implements OnInit {
  public id: string;
  public family: Family = new Family();
  public errorMessage: string;
  public positions = [];
  public page: Page;
  public edited = false;

  constructor(private route: ActivatedRoute,
              private familyService: FamilyService) {
  }

  ngOnInit() {
    this.id = this.route.params['_value']['id'];
    this.familyService.getFamilyByInterproId(`${this.id}`).subscribe(
      family => this.family = family,
      error => this.errorMessage = <any>error.message);
    this.showSequences(this.id);
  }

  showSequences(id: string) {
    this.familyService.getFamilySequences(id, 0)
      .subscribe(
        (page: Page) => {
          this.page = page;
          this.page.pageIndex = page.pageIndex + 1;
          this.positions = this.page.getPaginating(this.page.pageIndex);
          this.edited = true;
        },
        error => this.errorMessage = <any>error.message);
  }


  onDownload() {
    // this.fastaDownloaderService.createFasta(this.trinityId, "");
  }

  rePage(wantedPage: number): void {
    if (wantedPage < 1) {
      wantedPage = 1;
    } else if (wantedPage > this.page.totalPages - 1) {
      wantedPage = this.page.totalPages;
    }
    this.familyService.getFamilySequences(this.id, wantedPage - 1)
      .subscribe(
        (page: Page) => {
          this.page = page;
          this.page.pageIndex = page.pageIndex + 1;
          this.positions = this.page.getPaginating(this.page.pageIndex);
        },
        error => this.errorMessage = <any>error.message);
  }
}
