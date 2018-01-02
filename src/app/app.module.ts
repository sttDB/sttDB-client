import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {routes} from '../app.routing';
import {RouterModule} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchByTrinityIdComponent } from './sequence/search/search-by-trinity-id/search-by-trinity-id.component';
import { FastaUploadComponent } from './fasta-upload/fasta-upload.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FileDropDirective, FileSelectDirective} from 'ng2-file-upload';
import {SequenceService} from './sequence/sequence.service';
import {SequenceDetailComponent} from './sequence/detail/sequence-detail.component';
import {FastaDownloaderService} from './file-downloader/fasta-downloader.service';


@NgModule({
  declarations: [
    FileDropDirective,
    FileSelectDirective,
    AppComponent,
    AboutComponent,
    WelcomeComponent,
    SearchByTrinityIdComponent,
    SequenceDetailComponent,
    FastaUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SequenceService, FastaDownloaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
