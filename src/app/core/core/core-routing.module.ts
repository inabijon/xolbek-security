import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ConsultationComponent } from '../consultation/consultation.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { HomeComponent } from '../home/home.component';
import { TeamComponent } from '../team/team.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'consultation',
    component: ConsultationComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'team',
    component: TeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
