import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-by-trinity-id',
  templateUrl: './search-by-trinity-id.component.html',
  styleUrls: ['./search-by-trinity-id.component.css']
})
export class SearchByTrinityIdComponent implements OnInit {

  public trinityId: string;
  public trinityForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private router: Router) {
    this.trinityForm = fb.group({
      'trinity-id': ['Administrator username']
    });
  }

  ngOnInit() {

  }

  onSubmit(): void {
    console.log("submit!" + this.trinityId)
  }

}
