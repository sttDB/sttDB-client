import {AboutComponent} from './app/about/about.component';
import {Routes} from '@angular/router';
import {WelcomeComponent} from './app/welcome/welcome.component';
import {SearchByTranscriptComponent} from './app/sequence/search/search-by-transcript/search-by-transcript.component';
import {FastaUploadComponent} from './app/fasta-upload/fasta-upload.component';
import {SearchByTrinityIdComponent} from './app/sequence/search/search-by-trinity-id/search-by-trinity-id.component';
import {SequenceDetailComponent} from './app/sequence/detail/detail-sequence.component';

export const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'search/by-id', component: SearchByTrinityIdComponent},
  {path: 'search/by-transcript', component: SearchByTranscriptComponent},
  // {path: 'search/by-family', component: SearchByFamilyComponent},
  {path: 'sequences/:id', component: SequenceDetailComponent},
  {path: 'upload', component: FastaUploadComponent}
];
