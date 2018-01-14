import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileUploader} from 'ng2-file-upload';
import {environment} from '../../environments/environment.prod';

@Component({
  selector: 'app-fasta-upload',
  templateUrl: './fasta-upload.component.html',
  styleUrls: ['./fasta-upload.component.css'],
})
export class FastaUploadComponent implements OnInit {

  fastaForm: FormGroup;
  uploader = new FileUploader({url: `${environment.API}/upload/fasta`});

  constructor(private fb: FormBuilder,
              private router: Router) {
    this.fastaForm = fb.group({
      'trinity-input': ['Fasta file', Validators.required]
    });
  }

  ngOnInit() {
  }

}
