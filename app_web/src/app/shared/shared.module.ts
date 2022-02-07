import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { SinginFormComponent } from './singin-form/singin-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SkillsComponent,
    SinginFormComponent,
    LoginFormComponent,
    WelcomeComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    SkillsComponent,
    SinginFormComponent,
    LoginFormComponent,
    WelcomeComponent,
  ],
})
export class SharedModule {}
