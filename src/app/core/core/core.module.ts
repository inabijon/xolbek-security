import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ConsultationComponent } from '../consultation/consultation.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { TeamComponent } from '../team/team.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ConsultationComponent,
    ContactsComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
