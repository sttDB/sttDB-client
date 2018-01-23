import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Experiment} from "./experiment";
import {environment} from '../../environments/environment';
import {Http, Response} from "@angular/http";

@Injectable()
export class ExperimentService {

  constructor(private http: Http) { }

  // GET Experiments
  getExperiments(): Observable<Experiment[]> {
    return this.http.get(`${environment.API}/experiments`)
      .map((res: Response) => res.json()._embedded.experiments.map(json => new Experiment(json)))
      .catch((error: any) => Observable.throw(error.json()));
  }
}
