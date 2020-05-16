import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Organization } from '../../../models/users/organization';
import { isNullOrUndefined } from 'util';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth.service';
import { FetchOrganizationResult } from '../../../models/users/fetchOrganizationModel';
import { map } from 'rxjs/operators';
import { EditOrganizationModel } from '../../../models/editOrganizationModel';
import { NewTaskModel } from 'src/app/models/newTaskModel';

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

  editOrganization(id: number, editData: EditOrganizationModel): Observable<EditOrganizationModel> {
    return this.httpClient.post<EditOrganizationModel>('http://localhost:8080/edit_organization/' + id, editData);

  }

  deleteOrganization(id: number): Observable<Organization> {
    return this.httpClient.delete<Organization>('http://localhost:8080/delete_organization/' + id);
  }

  createTask(id: number, taskData: NewTaskModel): Observable<NewTaskModel> {
    return this.httpClient.post<NewTaskModel>('http://localhost:8080/create_task', taskData); //id?

  }
  
  // editTask(id: number, editData: NewTaskModel): Observable<NewTaskModel> {
  //   return this.httpClient.post<NewTaskModel>('http://localhost:8080/edit_organization/' + id, editData);

  // }

  // deleteTask(id: number, editData: NewTaskModel): Observable<NewTaskModel> {
  //   return this.httpClient.post<NewTaskModel>('http://localhost:8080/edit_organization/' + id, editData);

  // }

}
