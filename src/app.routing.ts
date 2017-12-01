import {AboutComponent} from './app/about/about.component';
import {Routes} from '@angular/router';
import {WelcomeComponent} from './app/welcome/welcome.component';

export const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'about', component: AboutComponent}
];
