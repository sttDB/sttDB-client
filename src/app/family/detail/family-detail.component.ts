import {Component, OnInit} from "@angular/core";
import {Family} from "../family";
import {ActivatedRoute} from "@angular/router";
import {FamilyService} from "../family.service";

@Component({
  selector: 'app-family-detail',
  templateUrl: './family-detail.component.html'
})
export class FamilyDetailComponent implements OnInit {
  private id: string;
  public family: Family = new Family();
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private familyService: FamilyService) {
  }

  ngOnInit() {
    this.id = this.route.params['_value']['id'];
    this.familyService.getFamilyByInterproId(`${this.id}`).subscribe(
      family => this.family = family,
      error => this.errorMessage = <any>error.message);
  }
}
