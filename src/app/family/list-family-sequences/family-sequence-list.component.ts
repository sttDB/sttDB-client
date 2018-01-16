import {Component} from '@angular/core';
import {FamilyService} from '../family.service';
import {ActivatedRoute} from '@angular/router';
import {Sequence} from "../../sequence/sequence";

@Component({
  selector: 'app-family-sequence-list',
  templateUrl: './family-sequence-list'
})
export class FamilyListSequencesComponent{
  private id: string;
  public sequences: Sequence[];
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private familyService: FamilyService) {
  }

  ngOnInit() {
    this.id = this.route.params['_value']['id'];
    this.familyService.getFamilySequences(`${this.id}`).subscribe(
      sequences => this.sequences = sequences,
      error => this.errorMessage = <any>error.message);
  }
}
