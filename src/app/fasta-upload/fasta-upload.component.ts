import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileUploader} from 'ng2-file-upload';
import {environment} from '../../environments/environment';
import {AuthenticationBasicService} from "../login-basic/authentication-basic.service";
import {ExperimentService} from "../experiment/experiment.service";

@Component({
  selector: 'app-fasta-upload',
  templateUrl: './fasta-upload.component.html',
  styleUrls: ['./fasta-upload.component.css'],
  providers: [AuthenticationBasicService]
})
export class FastaUploadComponent implements OnInit {

  warningMessage = "";
  fastaForm: FormGroup;
  uploader = new FileUploader({
    url: `${environment.API}/upload/fasta`,
    authToken: this.authentication.getCurrentUser().authorization
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private authentication: AuthenticationBasicService,
              private experimentService: ExperimentService) {
    this.fastaForm = fb.group({
      'trinity-input': ['Fasta file', Validators.required]
    });
  }

  ngOnInit() {
  }

  onFileWanted() {
    this.experimentService.getExperiment(this.uploader.queue.slice(-1)[0].file.name).subscribe(
      (exp: string[]) => {
        this.warningMessage = "This experiment already exists in the server. If you upload this file, the experiment will be reset and the information about sequences and families will be lost";
      },
      error => this.warningMessage = ""
    );
  }

}
