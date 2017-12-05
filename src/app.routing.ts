import {AboutComponent} from './app/about/about.component';
import {Routes} from '@angular/router';
import {WelcomeComponent} from './app/welcome/welcome.component';
import {SearchByTranscriptComponent} from './app/sequence/search-by-transcript/search-by-transcript.component';
import {FastaUploadComponent} from './app/fasta-upload/fasta-upload.component';
import {SearchByTrinityIdComponent} from './app/sequence/search-by-trinity-id/search-by-trinity-id.component';

export const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'search/search-by-id', component: SearchByTrinityIdComponent},
  {path: 'search/search-by-transcript', component: SearchByTranscriptComponent},
  {path: 'upload', component: FastaUploadComponent}
];
