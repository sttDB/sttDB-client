import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SequenceService} from "../../sequence.service";
import {Sequence} from "../../sequence";
import {FastaDownloaderService} from "../../../file-downloader/fasta-downloader.service";
import {Page} from "../../../pager/page";

@Component({
  selector: 'app-search-by-trinity-id',
  templateUrl: './search-by-trinity-id.component.html',
  styleUrls: ['./search-by-trinity-id.component.css']
})
export class SearchByTrinityIdComponent implements OnInit {
  public sequences: Sequence[] = [];
  public totalSequences = 0;
  public trinityId: string;
  public trinityForm: FormGroup;
  public errorMessage: '';
  public edited = false;
  public positions = [1,2,3,4,5,6,7,8,9];
  public totalPages: number;
  public pageIndex: number;

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
    this.sequenceService.getSequencesByTrinityIdLike(this.trinityId)
      .subscribe(
        (page: Page) => {
          this.sequences = page.listOfElements;
          this.totalSequences = page.totalElements;
          this.totalPages = page.totalPages;
          this.pageIndex = page.pageIndex + 1;
          this.edited = true; },
        error => this.errorMessage = <any>error.message);
  }

  onDownload() {
    this.fastaDownloaderService.createFasta(this.trinityId, "");
  }
}
