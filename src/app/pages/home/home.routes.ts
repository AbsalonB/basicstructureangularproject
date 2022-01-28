import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path:'home/login', component:LoginComponent,data:{title:'Login'} },
  { path:'home/recoverpassword', component:RecoverPasswordComponent, data:{title:'Recuperar contraseña'}},
  { path:'home/dashboard', component:DashboardComponent, data:{title:'Dashboard'}},
  { path:'home', component:LoginComponent,pathMatch:'full'}
];

export const HOME_ROUTING =RouterModule.forChild(routes);