import { Injectable } from '@angular/core';
import { OrganizationModel } from '../models/signUpOrganizationModel';
import { StudentModel } from '../models/signUpStudentModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { 
    console.log("Hello");
  }
 
  method() {
    console.log("Success")
  }

  signUpOrganization(organizationData: OrganizationModel) {
    this.httpClient.post<any>("https://tasker-diploma-app.herokuapp.com/signup/organizations", organizationData).subscribe(result => console.log(result));
  }

  signUpStudent(studentData: StudentModel) {
    this.httpClient.post<any>("https://tasker-diploma-app.herokuapp.com/signup/students", studentData).subscribe(result => console.log(result));
  }

  
}
