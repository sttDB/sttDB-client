import {AboutComponent} from './app/about/about.component';
import {Routes} from '@angular/router';
import {WelcomeComponent} from './app/welcome/welcome.component';
import {SearchByTranscriptComponent} from './app/sequence/search/search-by-transcript/search-by-transcript.component';
import {FastaUploadComponent} from './app/fasta-upload/fasta-upload.component';
import {SearchByTrinityIdComponent} from './app/sequence/search/search-by-trinity-id/search-by-trinity-id.component';
import {SequenceDetailComponent} from './app/sequence/detail/sequence-detail.component';
import {InterproUploadComponent} from './app/interpro-upload/interpro-upload.component';

export const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'search/by-id', component: SearchByTrinityIdComponent},
  {path: 'search/by-transcript', component: SearchByTranscriptComponent},
  // {path: 'search/by-family', component: SearchByFamilyComponent},
  {path: 'sequences/:id', component: SequenceDetailComponent},
  // Should add path 'upload' as entry point for other upload options
  {path: 'upload', component: FastaUploadComponent}, // should change path to 'upload/fasta' or 'upload/trinity'
  {path: 'upload/interpro', component: InterproUploadComponent}
];
