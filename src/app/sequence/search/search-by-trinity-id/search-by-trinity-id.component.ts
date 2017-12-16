import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SequenceService} from "../../sequence.service";
import {Sequence} from "../../sequence";
import {FastaDownloaderService} from "../../../file-downloader/fasta-downloader.service";

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
        (sequences: Sequence[]) => {
          this.sequences = sequences;
          this.totalSequences = sequences.length;
          this.edited = true; },
        error => this.errorMessage = <any>error.message);
  }

  onDownload() {
    const sequencesId = [];
    this.sequences.forEach(sequence => sequencesId.push(sequence.trinityId));
    this.fastaDownloaderService.createFasta(sequencesId);
  }
}
