import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { SinginFormComponent } from './singin-form/singin-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SkillsComponent,
    SinginFormComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    SkillsComponent,
    SinginFormComponent,
  ],
})
export class SharedModule {}
