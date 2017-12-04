import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-fasta-upload',
  templateUrl: './fasta-upload.component.html',
  styleUrls: ['./fasta-upload.component.css']
})
export class FastaUploadComponent implements OnInit {

  fastaForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) {
    this.fastaForm = fb.group({
      'trinity-input': ['Fasta file', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log('submit!');
  }

}
