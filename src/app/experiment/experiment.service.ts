import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {Page} from "../pager/page";
import {Experiment} from "./experiment";

@Injectable()
export class ExperimentService {

  constructor(private http: Http) {
  }

  getExperiments(): Observable<Page> {
    return this.http.get(`${environment.API}/experiments`)
      .map((res: Response) => {
        const page = {
          listOfElements: res.json().content.map(json => new Experiment(json)),
          totalElements: res.json().totalElements,
          totalPages: res.json().totalPages,
          pageIndex: res.json().number
        };
        return new Page(page);
      })
      .catch((error: any) => Observable.throw(error));
  }

}
