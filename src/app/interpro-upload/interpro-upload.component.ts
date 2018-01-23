import {Component, OnInit} from '@angular/core';
import {FileItem, FileUploader, FileUploaderOptions} from 'ng2-file-upload';
import {environment} from '../../environments/environment';
import {ExperimentService} from "../experiment/experiment.service";
import {Page} from "../pager/page";

@Component({
  selector: 'app-family-upload',
  templateUrl: './interpro-upload.component.html',
  styleUrls: ['./interpro-upload.component.css'],
  providers: [ExperimentService]
})
export class InterproUploadComponent implements OnInit {

  uploader = new FileUploader({url: `${environment.API}/upload/interpro`});
  experiments: string[];
  selectedExperiment: string;
  errorMessage: string;
  warning;

  constructor(private experimentService: ExperimentService) {
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
      this.warning = "Please select a experiment";
    } else {
      this.warning = "";
      let options: FileUploaderOptions = {};
      options.headers = [{name: 'experiment', value: this.selectedExperiment}];
      this.uploader.setOptions(options);
      item.upload()
    }
  }

}
