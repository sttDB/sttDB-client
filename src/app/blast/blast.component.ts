import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {DomSanitizer, SafeHtml, SafeResourceUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-blast',
  templateUrl: './blast.component.html',
  styleUrls: ['./blast.component.css']
})
export class BlastComponent implements OnInit {

  blastServerUrl: string;
  sanitizer: DomSanitizer;

  constructor(sanitizer: DomSanitizer) {
    this.blastServerUrl = environment.BLAST_URL;
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
  }

  getUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.blastServerUrl);
  }

}
