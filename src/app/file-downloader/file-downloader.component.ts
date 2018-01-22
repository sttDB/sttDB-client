import { Component, OnInit } from '@angular/core';
import {Experiment} from "../experiment/experiment";
import {ExperimentService} from "../experiment/experiment.service";

@Component({
  selector: 'app-file-downloader',
  templateUrl: './file-downloader.component.html',
  styleUrls: ['./file-downloader.component.css']
})
export class FileDownloaderComponent implements OnInit {
  experiments: Experiment[];
  errorMessage = '';

  constructor(private experimentService: ExperimentService) { }

  ngOnInit() {
    this.experimentService.getExperiments().subscribe(
      (exp: Experiment[]) => {
        this.experiments = exp;
      },
        error => this.errorMessage = <any>error.message);
  }

  chargeExperimentFiles() {

  }

}
