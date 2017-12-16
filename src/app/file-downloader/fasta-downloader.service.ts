import {Http, RequestOptions, ResponseContentType, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx' ;
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FastaDownloaderService {

  constructor(private http: Http) {
  }

  createFasta(id: Number[]) {
    const type = 'application/vnd.ms-excel';
    const options = new RequestOptions({
      responseType: ResponseContentType.Blob,
      headers: new Headers({ 'Accept': type })
    });

    this.http.get(`${environment.API}/createFasta`, options)
      .catch(errorResponse => Observable.throw(errorResponse.json()))
      .map((response) => {
        if (response instanceof Response) {
          return response.blob();
        }
        return response;
      })
      .subscribe(data => this.downloadFastaFile(data),
        error => console.log(error));
  }

  downloadFastaFile(data: Response){
    const blob = new Blob([data], { type: 'text/fasta' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }
}
