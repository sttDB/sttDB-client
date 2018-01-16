import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {Family} from './family';
import {environment} from '../../environments/environment';
import {Sequence} from '../sequence/sequence';

@Injectable()
export class FamilyService {

  constructor(private http: Http) {
  }

  // GET /families /interproId
  getFamilyByInterproId(interproId: string): Observable<Family> {
    return this.http.get(`${environment.API}/families/search/findByInterproId?interproId=${interproId}`)
      .map((res: Response) => new Family(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }

  getFamilySequences(interproId: string): Observable<Sequence[]> {
    return this.http.get(`${environment.API}/families/${interproId}/sequences`)
      .map((res: Response) => res.json()._embedded.sequences.map((json) => new Sequence(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }
}
