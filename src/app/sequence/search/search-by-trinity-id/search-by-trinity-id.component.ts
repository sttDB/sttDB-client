import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SequenceService} from "../../sequence.service";
import {FileDownloaderService} from "../../../file-downloader/file-downloader.service";
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
              private fileDownloaderService: FileDownloaderService,
              private fb: FormBuilder) {
    this.trinityForm = fb.group({
      'trinity-id': ['Sequence attribute']
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    this.edited = false;
    this.sequenceService.getSequencesByTrinityIdLike(this.trinityId, 0)
      .subscribe(
        (page: Page) => {
          this.page = new Page(page);
          this.page.pageIndex = page.pageIndex + 1;
          this.positions = this.page.getPaginating(this.page.pageIndex);
          this.edited = true;
        },
        error => this.errorMessage = <any>error.message);
  }

  onDownload() {
    this.fileDownloaderService.createFasta(this.trinityId, "");
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
          this.positions = this.page.getPaginating(this.page.pageIndex);
          this.edited = true;
        },
        error => this.errorMessage = <any>error.message);
  }

}
