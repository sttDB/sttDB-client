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
import {FileDropDirective, FileSelectDirective} from 'ng2-file-upload';
import {SequenceService} from './sequence/sequence.service';
import {SequenceDetailComponent} from './sequence/detail/sequence-detail.component';
import {InterproUploadComponent} from './interpro-upload/interpro-upload.component';
import {FileDownloaderService} from './file-downloader/file-downloader.service';
import {FamilyDetailComponent} from './family/detail/family-detail.component';
import {FamilyService} from './family/family.service';
import {FamilyListSequencesComponent} from './family/list-family-sequences/family-sequence-list.component';
import {FamilyListComponent} from './family/list-family/family-list.component';
import { LoginBasicComponent } from './login-basic/login-basic.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { FileDownloaderComponent } from './file-downloader/file-downloader.component';
import {ExperimentService} from "./experiment/experiment.service";
import { ReferencesComponent } from './references/references.component';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    FileDropDirective,
    FileSelectDirective,
    AppComponent,
    AboutComponent,
    WelcomeComponent,
    SearchByTrinityIdComponent,
    SequenceDetailComponent,
    FamilyListComponent,
    FamilyDetailComponent,
    FamilyListSequencesComponent,
    FastaUploadComponent,
    InterproUploadComponent,
    LoginBasicComponent,
    AdminPanelComponent,
    FileDownloaderComponent,
    ReferencesComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SequenceService, FileDownloaderService, FamilyService, ExperimentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
