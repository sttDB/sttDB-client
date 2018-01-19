import {Component, OnInit} from '@angular/core';
import {FileItem, FileUploader, FileUploaderOptions} from 'ng2-file-upload';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-family-upload',
  templateUrl: './interpro-upload.component.html',
  styleUrls: ['./interpro-upload.component.css']
})
export class InterproUploadComponent implements OnInit {

  uploader = new FileUploader({url: `${environment.API}/upload/interpro`});

  constructor() {
  }

  ngOnInit() {
  }

  upload(item: FileItem) {
    let options: FileUploaderOptions = {};
    options.headers = [{name: 'experiment', value: 'Trinity_primitive_output.fasta'}];
    this.uploader.setOptions(options);
    item.upload()
  }

}
