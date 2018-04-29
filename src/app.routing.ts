import {AboutComponent} from './app/about/about.component';
import {Routes} from '@angular/router';
import {WelcomeComponent} from './app/welcome/welcome.component';
import {FastaUploadComponent} from './app/fasta-upload/fasta-upload.component';
import {SearchByTrinityIdComponent} from './app/sequence/search/search-by-trinity-id/search-by-trinity-id.component';
import {SequenceDetailComponent} from './app/sequence/detail/sequence-detail.component';
import {InterproUploadComponent} from './app/interpro-upload/interpro-upload.component';
import {FamilyDetailComponent} from './app/family/detail/family-detail.component';
import {AdminPanelComponent} from './app/admin-panel/admin-panel.component';
import {FileDownloaderComponent} from './app/file-downloader/file-downloader.component';
import {ReferencesComponent} from './app/references/references.component';
import {ContactComponent} from './app/contact/contact.component';
import {HelpComponent} from './app/help/help.component';
import {BlastComponent} from './app/blast/blast.component';
import {LoggedInGuard} from "./app/login-basic/loggedin.guard";
import {KeywordListingComponent} from "./app/keyword-listing/keyword-listing.component";
import {SearchConsoleComponent} from "./app/search-console/search-console.component";

export const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'downloads', component: FileDownloaderComponent},
  {path: 'references', component: ReferencesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blast', component: BlastComponent},
  {path: 'search/by-id', component: SearchByTrinityIdComponent},
  {path: 'search/by-keyword', component: KeywordListingComponent},
  {path: 'sequences/:id/:experiment', component: SequenceDetailComponent},
  {path: 'families/:id', component: FamilyDetailComponent},
  {path: 'admin', component: AdminPanelComponent, canActivate:[LoggedInGuard]},
  {path: 'help', component: HelpComponent},
  {path: 'upload/fasta', component: FastaUploadComponent, canActivate:[LoggedInGuard]},
  {path: 'upload/interpro', component: InterproUploadComponent, canActivate:[LoggedInGuard]},
  {path: 'google23609caec1485f6a.html', component: SearchConsoleComponent}
];
