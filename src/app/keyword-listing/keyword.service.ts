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
    "simple": (entity, keyword, pageNumber) => this.getEntityByDescription(entity, keyword, pageNumber),
    "AND": (entity, firstKeyword, secondKeyword, pageNumber) => this.getEntityByDescriptionLikeAndLike(entity, firstKeyword, secondKeyword, pageNumber),
    "OR": (entity, orKeyword, otherOrKeyword, pageNumber) => this.getEntityByOrKeyword(entity, orKeyword, otherOrKeyword, pageNumber),
    "NOT": (entity, keyword, notKeyword, pageNumber) => this.getEntityByDescriptionLikeAndNotLike(entity, keyword, notKeyword, pageNumber),
    "AND NOT": (entity, firstKeyword, secondKeyword, notKeyword, pageNumber) => this.getEntityByDescriptionLikeAndLikeAndNotLike(entity, firstKeyword, secondKeyword, notKeyword, pageNumber),
    "AND OR": (entity, firstKeyword, secondKeyword, otherKeyword, pageNumber) => this.getEntityByDescriptionLikeAndLikeOrLike(entity, firstKeyword, secondKeyword, otherKeyword, pageNumber),
    "OR NOT": (entity, orKeyword, otherOrKeyword, notKeyword, pageNumber) => this.getEntityByAnyKeywordNotOther(entity, orKeyword, otherOrKeyword, notKeyword, pageNumber),
    "OR AND": (entity, orKeyword, otherOrKeyword, andKeyword, pageNumber) => this.getEntityByAnyKeywordAndOther(entity, orKeyword, otherOrKeyword, andKeyword, pageNumber)
  };

  constructor(private http: Http) {
  }

  getEntityByDescription(entity: string, keyword: string, pageNumber: number): Observable<Page> {
    return this.http.get(`${environment.API}/${entity}?descriptionKeyword=${keyword}&page=${pageNumber}`)
      .map((res: Response) => {
        return new Page(res.json());
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  getEntityByDescriptionLikeAndLike(entity: string, firstKeyword: string, secondKeyword: string, pageNumber: number): Observable<Page> {
    return this.http.get(`${environment.API}/${entity}?firstKeyword=${firstKeyword}&secondKeyword=${secondKeyword}&page=${pageNumber}`)
      .map((res: Response) => {
        return new Page(res.json());
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  getEntityByOrKeyword(entity: string, orKeyword: string, otherOrKeyword: string, pageNumber: number): Observable<Page> {
    return this.http.get(`${environment.API}/${entity}?orKeyword=${orKeyword}&otherOrKeyword=${otherOrKeyword}&page=${pageNumber}`)
      .map((res: Response) => {
        return new Page(res.json());
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  getEntityByDescriptionLikeAndNotLike(entity: string, keyword: string, notKeyword: string, pageNumber: number): Observable<Page> {
    return this.http.get(`${environment.API}/${entity}?keyword=${keyword}&notKeyword=${notKeyword}&page=${pageNumber}`)
      .map((res: Response) => {
        return new Page(res.json());
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  getEntityByDescriptionLikeAndLikeAndNotLike(entity: string, firstKeyword: string, secondKeyword: string,
                                              notKeyword: string, pageNumber: number): Observable<Page> {
    return this.http.get(`${environment.API}/${entity}?firstKeyword=${firstKeyword}&secondKeyword=${secondKeyword}&notKeyword=${notKeyword}&page=${pageNumber}`)
      .map((res: Response) => {
        return new Page(res.json());
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  getEntityByDescriptionLikeAndLikeOrLike(entity: string, firstKeyword: string, secondKeyword: string,
                                          otherKeyword: string, pageNumber: number): Observable<Page> {
    return this.http.get(`${environment.API}/${entity}?firstKeyword=${firstKeyword}&secondKeyword=${secondKeyword}&otherKeyword=${otherKeyword}&page=${pageNumber}`)
      .map((res: Response) => {
        return new Page(res.json());
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  getEntityByAnyKeywordNotOther(entity: string, orKeyword: string, otherOrKeyword: string, notKeyword: string,
                                pageNumber: number): Observable<Page> {
    return this.http.get(`${environment.API}/${entity}?orKeyword=${orKeyword}&otherOrKeyword=${otherOrKeyword}&notKeyword=${notKeyword}&page=${pageNumber}`)
      .map((res: Response) => {
        return new Page(res.json());
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  getEntityByAnyKeywordAndOther(entity: string, orKeyword: string, otherOrKeyword: string, andKeyword: string,
                                pageNumber: number): Observable<Page> {
    return this.http.get(`${environment.API}/${entity}?orKeyword=${orKeyword}&otherOrKeyword=${otherOrKeyword}&andKeyword=${andKeyword}&page=${pageNumber}`)
      .map((res: Response) => {
        return new Page(res.json());
      })
      .catch((error: any) => Observable.throw(error.json()));
  }
}
