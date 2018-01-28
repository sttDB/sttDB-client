import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationBasicService {

  constructor(private http: Http) {
  }

  login(username: string, password: string): Observable<User> {
    const authorization = this.generateAuthorization(username, password);
    const headers = new Headers({'Authorization': authorization});
    const options = new RequestOptions({headers: headers});

    return this.http.get(`${environment.API}/identity`, options)
      .map((res: Response) => {
        const user: User = new User(res.json());
        user.authorization = authorization;
        user.password = password;
        return user;
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  generateAuthorization(username: string, password: string): string {
    return `Basic ${btoa(`${username}:${password}`)}`;
  }

  storeCurrentUser(user: User): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  getCurrentUser(): User {
    return new User(JSON.parse(localStorage.getItem('currentUser')));
  }

}
