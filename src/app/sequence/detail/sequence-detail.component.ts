import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Sequence} from "../sequence";
import {SequenceService} from "../sequence.service";
import {FileDownloaderService} from "../../file-downloader/file-downloader.service";

@Component({
  selector: 'app-sequence-detail',
  templateUrl: './sequence-detail.component.html',
  styleUrls: ['sequence-detail.component.css']
})
export class SequenceDetailComponent implements OnInit {
  id: string;
  experiment: string;
  sequence: Sequence;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private sequenceService: SequenceService,
              private fileDownloaderService: FileDownloaderService) {
  }

  ngOnInit() {
    this.id = this.route.params['_value']['id'];
    this.experiment = this.route.params['_value']['experiment'];
    this.sequenceService.getSequencesByTrinityIdAndExperiment(`${this.id}`, `${this.experiment}`).subscribe(
      sequence => {
        this.sequence = sequence;
      },
      error => this.errorMessage = <any>error.message);
  }

  onSubmit() {
    this.fileDownloaderService.createFasta(this.sequence.trinityId, this.sequence.experiment);
  }
}
