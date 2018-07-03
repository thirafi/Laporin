import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TableComponent } from './table/table.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpModule } from '@angular/http';
import { ListPelaporComponent } from './list-pelapor/list-pelapor.component';
import { ListPetugasComponent } from './list-petugas/list-petugas.component';
import { ListLaporanComponent } from './list-laporan/list-laporan.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    PagenotfoundComponent,
    TableComponent,
    ListPelaporComponent,
    ListPetugasComponent,
    ListLaporanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
