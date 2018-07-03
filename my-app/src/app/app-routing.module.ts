import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { patch } from 'webdriver-js-extender';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListPelaporComponent } from './list-pelapor/list-pelapor.component';
import { ListPetugasComponent } from './list-petugas/list-petugas.component';
import { ListLaporanComponent } from './list-laporan/list-laporan.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch:  'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'listPelapor',
    component: ListPelaporComponent
  },
  {
    path: 'listPetugas',
    component: ListPetugasComponent
  },
  {
    path: 'listLaporan',
    component: ListLaporanComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
