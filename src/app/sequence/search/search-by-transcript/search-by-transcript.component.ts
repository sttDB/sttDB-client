import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Sequence} from "../../sequence";
import {SequenceService} from "../../sequence.service";

@Component({
  selector: 'app-search-by-transcript',
  templateUrl: './search-by-transcript.component.html',
  styleUrls: ['./search-by-transcript.component.css']
})
export class SearchByTranscriptComponent implements OnInit {
  public sequences: Sequence[] = [];
  public totalSequences = 0;
  public errorMessage = '';
  public transcript: string;
  public transcriptForm: FormGroup;
  public edited = false;

  constructor(private sequenceService: SequenceService,
              private fb: FormBuilder,
              private router: Router) {
    this.transcriptForm = fb.group({
      'transcript': ['Transcript']
    })
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.edited = false;
    this.sequenceService.getSequencesByTranscript(this.transcript)
      .subscribe(
        (sequences: Sequence[]) => {
          this.sequences = sequences;
          this.totalSequences = sequences.length;
          this.edited = true; },
        error => this.errorMessage = <any>error.message);
  }

}
