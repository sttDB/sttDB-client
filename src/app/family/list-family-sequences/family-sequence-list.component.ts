import {Component} from '@angular/core';
import {FamilyService} from '../family.service';
import {ActivatedRoute} from '@angular/router';
import {Sequence} from "../../sequence/sequence";
import {Page} from "../../pager/page";

@Component({
  selector: 'app-family-sequence-list',
  templateUrl: './family-sequence-list.component.html'
})
export class FamilyListSequencesComponent{
  private id: string;
  public errorMessage: string;
  public positions = [];
  public page: Page;

  constructor(private route: ActivatedRoute,
              private familyService: FamilyService) {
  }

  ngOnInit() {
    this.id = this.route.params['_value']['id'];
    this.familyService.getFamilySequences(this.id, 0)
      .subscribe(
        (page: Page) => {
          this.page = page;
          this.page.pageIndex = page.pageIndex + 1;
          this.positions = this.page.getPaginating(this.page.pageIndex + 1);},
        error => this.errorMessage = <any>error.message);
  }


  onDownload() {
    // this.fastaDownloaderService.createFasta(this.trinityId, "");
  }

  rePage(wantedPage: number): void {
    if(wantedPage < 1){
      wantedPage = 1;
    }else if(wantedPage > this.page.totalPages - 1){
      wantedPage = this.page.totalPages;
    }
    this.familyService.getFamilySequences(this.id, wantedPage - 1)
      .subscribe(
        (page: Page) => {
          this.page = page;
          this.page.pageIndex = page.pageIndex + 1;
          this.positions = this.page.getPaginating(this.page.pageIndex + 1);},
        error => this.errorMessage = <any>error.message);
  }

}
