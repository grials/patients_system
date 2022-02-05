import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SinginComponent } from './singin/singin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SinginComponent,
    DashboardComponent,
  ],
  exports: [HomeComponent, LoginComponent, SinginComponent, DashboardComponent],
  imports: [CommonModule, SharedModule, MaterialModule],
})
export class PagesModule {}
