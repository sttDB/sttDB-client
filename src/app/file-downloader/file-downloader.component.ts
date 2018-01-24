import { Component, OnInit } from '@angular/core';
import {Experiment} from "../experiment/experiment";
import {ExperimentService} from "../experiment/experiment.service";
import {FileDownloaderService} from "./file-downloader.service";

@Component({
  selector: 'app-file-downloader',
  templateUrl: './file-downloader.component.html',
  styleUrls: ['./file-downloader.component.css']
})
export class FileDownloaderComponent implements OnInit {
  experiments: Experiment[];
  errorMessage = '';
  files: string[];
  actualExperimentName: string;

  constructor(private experimentService: ExperimentService, private fileDownloaderService: FileDownloaderService) { }

  ngOnInit() {
    this.experimentService.getExperiments().subscribe(
      (exp: Experiment[]) => {
        this.experiments = exp;
      },
        error => this.errorMessage = <any>error.message);
  }

  chargeExperimentFiles(experiment: string) {
    this.experimentService.getExperimentFiles(experiment).subscribe(
      (exp: string[]) => {
        this.files = exp;
        this.actualExperimentName = experiment;
      },
      error => this.errorMessage = <any>error.message);
  }

  download(experiment: string, file: string) {
    this.fileDownloaderService.downloadExperimentFile(experiment, file);
  }

}
