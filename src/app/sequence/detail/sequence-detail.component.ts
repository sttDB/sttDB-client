import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Sequence} from "../sequence";
import {SequenceService} from "../sequence.service";

@Component({
  selector: 'app-sequence-detail',
  templateUrl: './sequence-detail.component.html'
})
export class SequenceDetailComponent implements OnInit {
  public sequence: Sequence = new Sequence();
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private sequenceService: SequenceService) {
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this.sequenceService.getSequence(`${id}`).subscribe(
            sequence => this.sequence = sequence,
            error => this.errorMessage = <any>error.message);
        }
      );
  }
}
