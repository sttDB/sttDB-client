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
  public sequences: Sequence[];
  public totalSequences = 0;
  public errorMessage: string;
  public positions = [];
  public totalPages: number;
  public pageIndex: number;

  constructor(private route: ActivatedRoute,
              private familyService: FamilyService) {
  }

  ngOnInit() {
    this.id = this.route.params['_value']['id'];
    this.familyService.getFamilySequences(this.id, 0)
      .subscribe(
        (page: Page) => {
          this.sequences = page.listOfElements;
          this.totalSequences = page.totalElements;
          this.totalPages = page.totalPages;
          this.pageIndex = page.pageIndex + 1;
          this.positions = this.getPaginating(this.pageIndex + 1)},
        error => this.errorMessage = <any>error.message);
  }


  onDownload() {
    // this.fastaDownloaderService.createFasta(this.trinityId, "");
  }

  rePage(wantedPage: number): void {
    if(wantedPage < 1){
      wantedPage = 1;
    }else if(wantedPage > this.totalPages - 1){
      wantedPage = this.totalPages - 1;
    }
    this.familyService.getFamilySequences(this.id, wantedPage - 1)
      .subscribe(
        (page: Page) => {
          this.sequences = page.listOfElements;
          this.totalSequences = page.totalElements;
          this.totalPages = page.totalPages;
          this.pageIndex = page.pageIndex + 1;
          this.positions = this.getPaginating(this.pageIndex + 1);
        },
        error => this.errorMessage = <any>error.message);
  }

  getPaginating(pageIndex: number): number[] {
    return pageIndex - 5 < 1 ?  this.createArrayIndex(1) : this.createArrayIndex(pageIndex - 5);
  }

  createArrayIndex(firstNumber: number): number[] {
    let pageIndexes = [];
    for(let i = firstNumber; i<firstNumber+9 && i<this.totalPages+1; i++){
      pageIndexes.push(i);
    }
    return pageIndexes;
  }
}
