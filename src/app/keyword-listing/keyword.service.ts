import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {Sequence} from '../sequence/sequence';
import {Page} from '../pager/page';

@Injectable()
export class KeywordService {

  constructor(private http: Http) {
  }

  getEntityByDescription(entity: string, keyword: string, pageNumber: number): Observable<Page> {
    return this.http.get(`${environment.API}/${entity}?descriptionKeyword=${keyword}&page=${pageNumber}`)
      .map((res: Response) => {
        return new Page(res.json());
      })
      .catch((error: any) => Observable.throw(error.json()));
  }
}
