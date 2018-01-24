import {Http, RequestOptions, ResponseContentType, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx' ;
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FileDownloaderService {

  constructor(private http: Http) {
  }

  createFasta(id: string, experiment: string) {
    const options = this.prepareOptions();
    this.http.get(`${environment.API}/download/fasta?trinityId=${id}&experiment=${experiment}`, options)
      .subscribe(data => {
        window.open(data.url);
        },
        error => console.log(error));
  }

  downloadExperimentFile(experiment: string, name: string) {
    const options = this.prepareOptions();
    this.http.get(`${environment.API}/download/${experiment}?file=${name}`, options)
      .subscribe(data => {
          window.open(data.url);
        },
        error => console.log(error));
  }

  private prepareOptions() {
    const type = 'application/vnd.ms-excel';
    const options = new RequestOptions({
      responseType: ResponseContentType.Blob,
      headers: new Headers({'Accept': type})
    });
    return options;
  }
}
