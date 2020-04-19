import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OpportunitiesListComponent } from './components/opportunities-list/opportunities-list.component';
import { MainInfoComponent } from './components/main-info/main-info.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { IntroComponent } from './components/intro/intro.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { StudentProfileMainComponent } from './components/student-profile-main/student-profile-main.component';
import { StudentProfileSkillsComponent } from './components/student-profile-skills/student-profile-skills.component';
import { StudentProfileInfoComponent } from './components/student-profile-info/student-profile-info.component';
import { StudentProfileFeedbackComponent } from './components/student-profile-feedback/student-profile-feedback.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { OrganizationListComponent } from './components/organization-list/organization-list.component';
import { OrganizationProfileComponent } from './components/organization-profile/organization-profile.component';
import { StudentProfileEditComponent } from './components/student-profile-edit/student-profile-edit.component';
import { OrganizationProfileEditComponent } from './components/organization-profile-edit/organization-profile-edit.component';
import { OrganizationProfileNewTaskComponent } from './components/organization-profile-new-task/organization-profile-new-task.component';
import { OrganizationProfileFeedbackComponent } from './components/organization-profile-feedback/organization-profile-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OpportunitiesListComponent,
    MainInfoComponent,
    FooterComponent,
    SignUpComponent,
    LogInComponent,
    IntroComponent,
    StudentProfileComponent,
    StudentProfileMainComponent,
    StudentProfileSkillsComponent,
    StudentProfileInfoComponent,
    StudentProfileFeedbackComponent,
    StudentListComponent,
    OrganizationListComponent,
    OrganizationProfileComponent,
    StudentProfileEditComponent,
    OrganizationProfileEditComponent,
    OrganizationProfileNewTaskComponent,
    OrganizationProfileFeedbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
