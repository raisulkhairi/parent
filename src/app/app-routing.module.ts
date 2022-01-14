import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'profil',
    component:ProfilComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
