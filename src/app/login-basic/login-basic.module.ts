import { NgModule } from '@angular/core';
import { LoginBasicComponent } from './login-basic.component';
import { AuthenticationBasicService } from './authentication-basic.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule, AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routing';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [AuthenticationBasicService],
  declarations: [LoginBasicComponent],
  exports: [LoginBasicComponent]
})
export class LoginBasicModule { }
