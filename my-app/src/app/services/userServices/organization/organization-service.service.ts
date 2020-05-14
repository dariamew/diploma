import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Organization } from '../../../models/users/organization';
import { isNullOrUndefined } from 'util';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth.service';
import { FetchOrganizationResult } from '../../../models/users/fetchOrganizationModel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrganizationServiceService {

  constructor(private httpClient: HttpClient) { }


  getOrganization(id?: string): Observable<Organization> {
    if (isNullOrUndefined(id)) {
      return this.httpClient.get<FetchOrganizationResult>("http://localhost:8080/self").pipe(
       map(result => result.userData)
      );
    } else {
      return this.httpClient.get<FetchOrganizationResult>(`http://localhost:8080/organization/${id}`).pipe(
        map(result => result.userData)
      );
    }
  }
}
