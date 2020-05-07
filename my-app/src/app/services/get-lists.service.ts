import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { StudentModel } from '../models/studentModel';
import { OrganizationModel} from '../models/organizationModel';

@Injectable({
  providedIn: 'root'
})
export class GetListsService {

  constructor(private hhtpClient: HttpClient) { }

  getStudents(): Observable<StudentModel[]> {
    return this.hhtpClient.get<StudentModel[]>('http://localhost:8080/student_list');
  }
  getOrganizations(): Observable<OrganizationModel[]> {
    return this.hhtpClient.get<OrganizationModel[]>('http://localhost:8080/organization_list');
  }
}
