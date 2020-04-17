import { Injectable } from '@angular/core';
import { OrganizationModel } from '../models/signUpOrganizationModel';
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
    this.httpClient.post<any>("https://tasker2-cdae80cc.localhost.run/signup/organization", organizationData).subscribe(result => console.log(result));
  }
}
