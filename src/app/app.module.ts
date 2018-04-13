import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {routes} from '../app.routing';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {SearchByTrinityIdComponent} from './sequence/search/search-by-trinity-id/search-by-trinity-id.component';
import {FastaUploadComponent} from './fasta-upload/fasta-upload.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FileUploadModule} from 'ng2-file-upload';
import {SequenceService} from './sequence/sequence.service';
import {SequenceDetailComponent} from './sequence/detail/sequence-detail.component';
import {InterproUploadComponent} from './interpro-upload/interpro-upload.component';
import {FileDownloaderService} from './file-downloader/file-downloader.service';
import {FamilyDetailComponent} from './family/detail/family-detail.component';
import {FamilyService} from './family/family.service';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {FileDownloaderComponent} from './file-downloader/file-downloader.component';
import {ExperimentService} from "./experiment/experiment.service";
import {ReferencesComponent} from './references/references.component';
import {ContactComponent} from './contact/contact.component';
import {HelpComponent} from './help/help.component';
import {BlastComponent} from './blast/blast.component';
import {LoginBasicModule} from "./login-basic/login-basic.module";
import {LoggedInGuard} from "./login-basic/loggedin.guard";
import {KeywordListingComponent} from './keyword-listing/keyword-listing.component';
import {KeywordService} from "./keyword-listing/keyword.service";


@NgModule({
  declarations: [
    // FileDropDirective,
    // FileSelectDirective,
    AppComponent,
    AboutComponent,
    WelcomeComponent,
    SearchByTrinityIdComponent,
    SequenceDetailComponent,
    FamilyDetailComponent,
    FastaUploadComponent,
    InterproUploadComponent,
    AdminPanelComponent,
    FileDownloaderComponent,
    ReferencesComponent,
    ContactComponent,
    HelpComponent,
    BlastComponent,
    KeywordListingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    LoginBasicModule,
    FormsModule,
    FileUploadModule
  ],
  providers: [SequenceService, FileDownloaderService, FamilyService, ExperimentService, LoggedInGuard, KeywordService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
