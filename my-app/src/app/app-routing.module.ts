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
import { StudentProfileComponent } from './components/home/student-profile/student-profile.component';
import { AuthGuard } from './helpers/auth.guard';
import { OrganizationProfileComponent } from './components/home/organization-profile/organization-profile.component';
import { AdminProfileComponent } from './components/home/admin-profile/admin-profile.component';
import { AdminProfileFeedbackComponent } from './components/admin-profile-feedback/admin-profile-feedback.component';
import { AdminProfileTasksComponent } from './components/admin-profile-tasks/admin-profile-tasks.component';
import { componentFactoryName } from '@angular/compiler';
import { StudentProfileEditComponent } from './components/student-profile-edit/student-profile-edit.component';
import { OrganizationProfileEditComponent } from './components/organization-profile-edit/organization-profile-edit.component';
import { OrganizationProfileTaskListComponent } from './components/organization-profile-task-list/organization-profile-task-list.component';
import { OrganizationProfileNewTaskComponent } from './components/organization-profile-new-task/organization-profile-new-task.component';
import { OrganizationProfileEditTaskComponent } from './components/organization-profile-edit-task/organization-profile-edit-task.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LogInComponent },
  { 
    path: "home", 
    canActivate: [AuthGuard],
    children: [
      { path: "student", component: StudentProfileComponent },
      { path: "student/:id", component: StudentProfileComponent },
      { path: "organization", component: OrganizationProfileComponent },
      { path: "organization/:id", component: OrganizationProfileComponent }
    ] 
  },
  { path: "edit_student", component: StudentProfileEditComponent },
  { path: "edit_organization", component: OrganizationProfileEditComponent },
  { path: "organization_tasks", component: OrganizationProfileTaskListComponent },
  { path: "new_task", component: OrganizationProfileNewTaskComponent },
  { path: 'student_list', component: StudentListComponent },
  { path: 'organization_list', component: OrganizationListComponent },
  { path: "edit_task/:id", component: OrganizationProfileEditTaskComponent },
  // {path: 'admin', component: AdminProfileComponent},
  { path: 'admin_tasks', component: AdminProfileTasksComponent },
  { path: 'admin_feedback', component: AdminProfileFeedbackComponent },
  { path: "**", component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

