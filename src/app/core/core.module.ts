import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { LoginService } from './http/loginservice/login.service';

 
@NgModule({
  declarations: [ ],
  imports: [
    BrowserModule,
    LoginService, 
  ],
  providers: [],
  bootstrap: []
})
export class CoreModule { }
