import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EditOrganizationModel } from '../models/editOrganizationModel';
import { EditStudentModel } from '../models/editStudentModel';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  constructor(private httpClient: HttpClient) { }

  
  editStudentProfile(editStudentData: EditStudentModel) {
    this.httpClient.post<any>("https://tasker-diploma-app.herokuapp.com/signup/students", editStudentData).subscribe(result => console.log(result));
  }
  
  editOrganizationProfile(editOrganizationData: EditOrganizationModel) {
    this.httpClient.post<any>("https://tasker-diploma-app.herokuapp.com/signup/students", editOrganizationData).subscribe(result => console.log(result));
  }
}
