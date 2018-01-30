import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-blast',
  templateUrl: './blast.component.html',
  styleUrls: ['./blast.component.css']
})
export class BlastComponent implements OnInit {

  blastServerUrl: string;

  constructor() {
    this.blastServerUrl = environment.BLAST_URL;
  }

  ngOnInit() {
  }

}
