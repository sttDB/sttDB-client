import {Http, RequestOptions, ResponseContentType, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx' ;
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FastaDownloaderService {

  constructor(private http: Http) {
  }

  createFasta(id: String) {
    const type = 'application/vnd.ms-excel';
    const options = new RequestOptions({
      responseType: ResponseContentType.Blob,
      headers: new Headers({ 'Accept': type })
    });

    this.http.get(`${environment.API}/downloadFasta?id=${id}`, options)
      .subscribe(data => {
        window.open(data.url);
        },
        error => console.log(error));
  }
}
