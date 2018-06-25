import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {FileItem, FileUploader, FileUploaderOptions} from "ng2-file-upload";
import {Experiment} from "../experiment/experiment";
import {AuthenticationBasicService} from "../login-basic/authentication-basic.service";
import {ExperimentService} from "../experiment/experiment.service";
import {Page} from "../pager/page";

@Component({
  selector: 'app-kegg-upload',
  templateUrl: './kegg-upload.component.html',
  styleUrls: ['./kegg-upload.component.css']
})
export class KeggUploadComponent implements OnInit {

  uploader = new FileUploader({url: `${environment.API}/upload/kegg`,
    authToken: this.authentication.getCurrentUser().authorization});
  experiments: Experiment[];
  selectedExperiment: string;
  errorMessage: string;
  warning;

  constructor(private experimentService: ExperimentService, private authentication: AuthenticationBasicService) {
  }

  ngOnInit() {
    this.experimentService.getExperimentsAsPage()
      .subscribe(
        (page: Page) => {
          this.experiments = page.listOfElements;
        },
        error => this.errorMessage = <any>error.message);
  }

  upload(item: FileItem) {
    if (this.selectedExperiment == null || this.selectedExperiment === 'none-selected') {
      this.warning = "Please select an experiment";
    } else {
      this.warning = "";
      let options: FileUploaderOptions = {};
      options.headers = [{name: 'experiment', value: this.selectedExperiment}];
      this.uploader.setOptions(options);
      item.upload()
    }
  }
}
