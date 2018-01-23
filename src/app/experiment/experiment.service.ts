import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Experiment} from "./experiment";
import {environment} from '../../environments/environment';
import {Http, Response} from "@angular/http";
import {Page} from "../pager/page";

@Injectable()
export class ExperimentService {

  constructor(private http: Http) { }

  // GET Experiments
  getExperiments(): Observable<Experiment[]> {
    return this.http.get(`${environment.API}/experiments`)
      .map((res: Response) => res.json().content.map(json => new Experiment(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }

  getExperimentsAsPage(): Observable<Page> {
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
