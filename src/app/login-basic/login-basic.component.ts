import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-basic',
  templateUrl: './login-basic.component.html',
  styleUrls: ['./login-basic.component.css']
})
export class LoginBasicComponent implements OnInit {

  errorMessage = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    // Implement de call to service
    this.router.navigate(["/admin"]);
  }

}
