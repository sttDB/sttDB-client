import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {Page} from '../pager/page';

@Injectable()
export class KeywordService {

  /*AND|OR|NOT, AND OR, OR AND, AND NOT, OR NOT, NOT AND, NOT OR*/
  public combinations = {
    "simple": (entity, params, pageNumber) => this.getEntityByDescription(entity, params, pageNumber),
    "AND": (entity, params, pageNumber) => this.getEntityByDescriptionLikeAndLike(entity, params, pageNumber),
    "OR": (entity, params, pageNumber) => this.getEntityByOrKeyword(entity, params, pageNumber),
    "NOT": (entity, params, pageNumber) => this.getEntityByDescriptionLikeAndNotLike(entity, params, pageNumber),
    "AND NOT": (entity, params, pageNumber) => this.getEntityByDescriptionLikeAndLikeAndNotLike(entity, params, pageNumber),
    "AND OR": (entity, params, pageNumber) => this.getEntityByDescriptionLikeAndLikeOrLike(entity, params, pageNumber),
    "OR NOT": (entity, params, pageNumber) => this.getEntityByAnyKeywordNotOther(entity, params, pageNumber),
    "OR AND": (entity, params, pageNumber) => this.getEntityByAnyKeywordAndOther(entity, params, pageNumber),
    "NOT AND": (entity, params, pageNumber) => this.getEntityByDescriptionLikeNotLikeAndLike(entity, params, pageNumber),
    "NOT OR": () => {}
  };

  constructor(private http: Http) {
  }

  getEntityByDescription(entity: string, params: string[], pageNumber: number): Observable<Page> {
    return this.http.get(`${environment.API}/${entity}?descriptionKeyword=${params[0]}&page=${pageNumber}`)
      .map((res: Response) => {
        return new Page(res.json());
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  getEntityByDescriptionLikeAndLike(entity: string, params: string[], pageNumber: number): Observable<Page> {
    return this.http.get(`${environment.API}/${entity}?firstKeyword=${params[0]}&secondKeyword=${params[1]}&page=${pageNumber}`)
      .map((res: Response) => {
        return new Page(res.json());
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  getEntityByOrKeyword(entity: string, params: string[], pageNumber: number): Observable<Page> {
    return this.http.get(`${environment.API}/${entity}?orKeyword=${params[0]}&otherOrKeyword=${params[1]}&page=${pageNumber}`)
      .map((res: Response) => {
        return new Page(res.json());
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  getEntityByDescriptionLikeAndNotLike(entity: string, params: string[], pageNumber: number): Observable<Page> {
    return this.http.get(`${environment.API}/${entity}?keyword=${params[0]}&notKeyword=${params[1]}&page=${pageNumber}`)
      .map((res: Response) => {
        return new Page(res.json());
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  getEntityByDescriptionLikeAndLikeAndNotLike(entity: string, params: string[], pageNumber: number): Observable<Page> {
    return this.http.get(`${environment.API}/${entity}?firstKeyword=${params[0]}&secondKeyword=${params[1]}&notKeyword=${params[2]}&page=${pageNumber}`)
      .map((res: Response) => {
        return new Page(res.json());
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  getEntityByDescriptionLikeAndLikeOrLike(entity: string, params: string[], pageNumber: number): Observable<Page> {
    return this.http.get(`${environment.API}/${entity}?firstKeyword=${params[0]}&secondKeyword=${params[1]}&otherKeyword=${params[2]}&page=${pageNumber}`)
      .map((res: Response) => {
        return new Page(res.json());
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  getEntityByAnyKeywordNotOther(entity: string, params: string[], pageNumber: number): Observable<Page> {
    return this.http.get(`${environment.API}/${entity}?orKeyword=${params[0]}&otherOrKeyword=${params[1]}&notKeyword=${params[2]}&page=${pageNumber}`)
      .map((res: Response) => {
        return new Page(res.json());
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  getEntityByAnyKeywordAndOther(entity: string, params: string[], pageNumber: number): Observable<Page> {
    return this.http.get(`${environment.API}/${entity}?orKeyword=${params[0]}&otherOrKeyword=${params[1]}&andKeyword=${params[2]}&page=${pageNumber}`)
      .map((res: Response) => {
        return new Page(res.json());
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  getEntityByDescriptionLikeNotLikeAndLike(entity: string, params: string[], pageNumber: number): Observable<Page> {
    return this.http.get(`${environment.API}/${entity}?firstKeyword=${params[0]}&secondKeyword=${params[2]}&notKeyword=${params[1]}&page=${pageNumber}`)
      .map((res: Response) => {
        return new Page(res.json());
      })
      .catch((error: any) => Observable.throw(error.json()));
  }
}
