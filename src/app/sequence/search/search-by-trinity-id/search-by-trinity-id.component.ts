import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {SequenceService} from "../../sequence.service";
import {FastaDownloaderService} from "../../../file-downloader/fasta-downloader.service";
import {Page} from "../../../pager/page";

@Component({
  selector: 'app-search-by-trinity-id',
  templateUrl: './search-by-trinity-id.component.html',
  styleUrls: ['./search-by-trinity-id.component.css']
})
export class SearchByTrinityIdComponent implements OnInit {

  public trinityId: string;
  public trinityForm: FormGroup;
  public errorMessage: '';
  public edited = false;
  public positions = [];
  public page: Page;

  constructor(private sequenceService: SequenceService,
              private fastaDownloaderService: FastaDownloaderService,
              private fb: FormBuilder,
              private router: Router) {
    this.trinityForm = fb.group({
      'trinity-id': ['Administrator username']
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    this.edited = false;
    this.sequenceService.getSequencesByTrinityIdLike(this.trinityId, 0)
      .subscribe(
        (page: Page) => {
          this.page = page;
          this.page.pageIndex = page.pageIndex + 1;
          this.positions = this.page.getPaginating(this.page.pageIndex + 1);
          this.edited = true;
        },
        error => this.errorMessage = <any>error.message);
  }

  onDownload() {
    this.fastaDownloaderService.createFasta(this.trinityId, "");
  }

  rePage(wantedPage: number): void {
    if (wantedPage < 1) {
      wantedPage = 1;
    } else if (wantedPage > this.page.totalPages - 1) {
      wantedPage = this.page.totalPages;
    }
    this.sequenceService.getSequencesByTrinityIdLike(this.trinityId, wantedPage - 1)
      .subscribe(
        (page: Page) => {
          this.page = page;
          this.page.pageIndex = page.pageIndex + 1;
          this.positions = this.page.getPaginating(this.page.pageIndex + 1);
          this.edited = true;
        },
        error => this.errorMessage = <any>error.message);
  }

}
