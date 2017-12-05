import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-by-transcript',
  templateUrl: './search-by-transcript.component.html',
  styleUrls: ['./search-by-transcript.component.css']
})
export class SearchByTranscriptComponent implements OnInit {

  public transcript: string;
  public transcriptForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private router: Router) {
    this.transcriptForm = fb.group({
      'transcript': ['Transcript']
    })
  }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log("Querying!! " + this.transcript);
    // query service
  }

}
