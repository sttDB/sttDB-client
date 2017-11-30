import {AboutComponent} from './app/about/about.component';
import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent}
];
