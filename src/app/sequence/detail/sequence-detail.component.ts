import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Sequence} from "../sequence";
import {SequenceService} from "../sequence.service";
import {FastaDownloaderService} from "../../file-downloader/fasta-downloader.service";

@Component({
  selector: 'app-sequence-detail',
  templateUrl: './sequence-detail.component.html'
})
export class SequenceDetailComponent implements OnInit {
  private id: string;
  public sequence: Sequence = new Sequence();
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private sequenceService: SequenceService,
              private fastaDownloaderService: FastaDownloaderService) {
  }

  ngOnInit() {
    this.id = this.route.params['_value']['id'];
    this.sequenceService.getSequencesByTrinityId(`${this.id}`).subscribe(
      sequences => this.sequence = sequences[0],
      error => this.errorMessage = <any>error.message);
  }

  onSubmit() {
    this.fastaDownloaderService.createFasta(this.sequence.trinityId)
  }
}
