import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {Sequence} from './sequence';
import {environment} from '../../environments/environment';

@Injectable()
export class SequenceService {

  constructor(private http: Http) { }

  // GET /sequences /trinityId
  getSequencesByTrinityId(trinityId: string): Observable<Sequence[]> {
    return this.http.get(`${environment.API}/sequences/search/findByTrinityId?trinityId=${trinityId}`)
      .map((res: Response) => res.json()._embedded.sequences.map(json => new Sequence(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }

  // GET /sequences /transcript
  getSequencesByTranscript(transcript: string): Observable<Sequence[]> {
    return this.http.get(`${environment.API}/sequences/search/findByTranscript?transcript=${transcript}`)
      .map((res: Response) =>  res.json()._embedded.sequences.map(json => new Sequence(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }

}
