import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {routes} from '../app.routing';
import {RouterModule} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchByTranscriptComponent } from './sequence/search/search-by-transcript/search-by-transcript.component';
import { SearchByTrinityIdComponent } from './sequence/search/search-by-trinity-id/search-by-trinity-id.component';
import { FastaUploadComponent } from './fasta-upload/fasta-upload.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FileDropDirective, FileSelectDirective} from 'ng2-file-upload';


@NgModule({
  declarations: [
    FileDropDirective,
    FileSelectDirective,
    AppComponent,
    AboutComponent,
    WelcomeComponent,
    SearchByTranscriptComponent,
    SearchByTrinityIdComponent,
    FastaUploadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
