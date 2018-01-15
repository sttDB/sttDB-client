import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {Sequence} from './sequence';
import {environment} from '../../environments/environment';
import {Page} from "../pager/page";

@Injectable()
export class SequenceService {

  constructor(private http: Http) {
  }

  // GET /sequences /trinityId
  getSequencesByTrinityId(trinityId: string): Observable<Sequence[]> {
    return this.http.get(`${environment.API}/sequences/search/findByTrinityId?trinityId=${trinityId}`)
      .map((res: Response) => res.json()._embedded.sequences.map(json => new Sequence(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }

  // GET /sequences /trinityIdLike
  getSequencesByTrinityIdLike(trinityId: string): Observable<Page> {
    return this.http.get(`${environment.API}/sequences/search/findByTrinityIdLike?trinityId=${trinityId}`)
      .map((res: Response) => {
        const page = {listOfElements: res.json()._embedded.sequences,
                      totalElements: res.json().page.totalElements,
                      totalPages: res.json().page.totalPages,
                      pageIndex: res.json().page.number};
        console.log(page);
        return new Page(page);
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  // GET /sequences /id
  getSequence(id: string) {
    return this.http.get(`${environment.API}/sequences/${id}`)
      .map((res: Response) => new Sequence(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }
}
