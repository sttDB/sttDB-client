import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SequenceService} from "../../sequence.service";
import {Sequence} from "../../sequence";

@Component({
  selector: 'app-search-by-trinity-id',
  templateUrl: './search-by-trinity-id.component.html',
  styleUrls: ['./search-by-trinity-id.component.css']
})
export class SearchByTrinityIdComponent implements OnInit {
  public sequences: Sequence[] = [];
  public totalSequences = 0;
  public trinityId: string;
  public trinityForm: FormGroup;
  public errorMessage: '';
  public edited = false;

  constructor(private sequenceService: SequenceService,
              private fb: FormBuilder,
              private router: Router) {
    this.trinityForm = fb.group({
      'trinity-id': ['Administrator username']
    });
  }

  ngOnInit() {

  }

  onSubmit(): void {
    this.edited = false;
    this.sequenceService.getSequencesByTrinityId(this.trinityId)
      .subscribe(
        (sequences: Sequence[]) => {
          console.log(sequences);
          this.sequences = sequences;
          this.totalSequences = sequences.length;
          this.edited = true; },
        error => this.errorMessage = <any>error.message);
  }
}
