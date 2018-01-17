import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {Family} from './family';
import {environment} from '../../environments/environment';
import {Sequence} from '../sequence/sequence';
import {Page} from '../pager/page';

@Injectable()
export class FamilyService {

  constructor(private http: Http) {
  }

  // GET /families /interproId
  getFamilyByInterproId(interproId: string): Observable<Family> {
    return this.http.get(`${environment.API}/families/${interproId}`)
      .map((res: Response) => new Family(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }

  getFamilySequences(interproId: string, pageNumber: number): Observable<Page> {
    return this.http.get(`${environment.API}/families/${interproId}/sequences?page=${pageNumber}`)
      .map((res: Response) => {
        const page = {listOfElements: res.json().content,
          totalElements: res.json().totalElements,
          totalPages: res.json().totalPages,
          pageIndex: res.json().number};
        return new Page(page);
      })
      .catch((error: any) => Observable.throw(error.json()));
  }
}
