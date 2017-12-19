import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-family-upload',
  templateUrl: './interpro-upload.component.html',
  styleUrls: ['./interpro-upload.component.css']
})
export class InterproUploadComponent implements OnInit {

  uploader = new FileUploader({url: `${environment.API}/upload/interpro`});

  constructor() { }

  ngOnInit() {
  }

}
