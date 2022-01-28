import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren:()=>import('./pages/home/home.module').then(m=>m.HomeModule),
    data:{title:'Home'}
  },
  { path:'',pathMatch:'full',redirectTo:'home/login' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
