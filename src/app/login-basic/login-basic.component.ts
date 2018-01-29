import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationBasicService} from './authentication-basic.service';
import {User} from './user';

@Component({
  selector: 'app-login-basic',
  templateUrl: './login-basic.component.html',
  styleUrls: ['./login-basic.component.css'],
  providers: [AuthenticationBasicService]
})
export class LoginBasicComponent implements OnInit {

  errorMessage = '';

  constructor(private router: Router, private authenticationService: AuthenticationBasicService) { }

  ngOnInit() {
  }

  login(userInput: HTMLInputElement, passwordInput: HTMLInputElement): void {
    this.authenticationService.login(userInput.value, passwordInput.value)
      .subscribe(
        user => {
          this.authenticationService.storeCurrentUser(user);
          this.router.navigate(['/admin']);
        },
        error =>  this.errorMessage = <any>error.message);
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  getCurrentUserName(): string {
    return this.authenticationService.getCurrentUser().username;
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  getUser(): User {
    return this.authenticationService.getCurrentUser();
  }

}
