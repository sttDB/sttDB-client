import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {Sequence} from './sequence';
import {environment} from '../../environments/environment';
import {Page} from "../pager/page";
import {Family} from "../family/family";

@Injectable()
export class SequenceService {

  constructor(private http: Http) {
  }

  // GET /sequences /trinityId /experiment
  getSequencesByTrinityIdAndExperiment(trinityId: string, experiment: string): Observable<Sequence[]> {
    return this.http.get(`${environment.API}/sequences/search/findByTrinityId?trinityId=${trinityId}&experiment=${experiment}`)
      .map((res: Response) => res.json()._embedded.sequences.map(json => new Sequence(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }

  // GET /sequences /trinityIdLike
  getSequencesByTrinityIdLike(trinityId: string, pageNumber: number): Observable<Page> {
    return this.http.get(`${environment.API}/sequences/search/findByTrinityIdLike?trinityId=${trinityId}&page=${pageNumber}`)
      .map((res: Response) => {
        const page = {listOfElements: res.json()._embedded.sequences,
                      totalElements: res.json().page.totalElements,
                      totalPages: res.json().page.totalPages,
                      pageIndex: res.json().page.number};
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

  getSequenceFamilies(url: string): Observable<Family[]> {
    return this.http.get(`${url}`)
      .map((res: Response) => res.json()._embedded.families.map(json => new Family(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }
}
