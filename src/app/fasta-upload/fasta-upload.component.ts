import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileUploader} from 'ng2-file-upload';
import {environment} from '../../environments/environment';
import {AuthenticationBasicService} from "../login-basic/authentication-basic.service";

@Component({
  selector: 'app-fasta-upload',
  templateUrl: './fasta-upload.component.html',
  styleUrls: ['./fasta-upload.component.css'],
  providers: [AuthenticationBasicService]
})
export class FastaUploadComponent implements OnInit {

  fastaForm: FormGroup;
  uploader = new FileUploader({url: `${environment.API}/upload/fasta`,
    authToken: this.authentication.getCurrentUser().authorization});

  constructor(private fb: FormBuilder,
              private router: Router,
              private authentication: AuthenticationBasicService) {
    this.fastaForm = fb.group({
      'trinity-input': ['Fasta file', Validators.required]
    });
  }

  ngOnInit() {
  }

}
