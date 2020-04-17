import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OpportunitiesListComponent } from './components/opportunities-list/opportunities-list.component';
import { MainInfoComponent } from './components/main-info/main-info.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { IntroComponent } from './components/intro/intro.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { OrganizationListComponent } from './components/organization-list/organization-list.component';

const routes: Routes = [
  {path: '', component: IntroComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'login', component: LogInComponent},
  {path: 'student_list', component: StudentListComponent},
  {path: 'organization_list', component: OrganizationListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
