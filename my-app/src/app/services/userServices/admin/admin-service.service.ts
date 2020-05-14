import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { TaskModel } from '../../../models/taskModel';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllTasks(): Observable<TaskModel[]> {
    return this.httpClient.get<TaskModel[]>('http://localhost:8080/admin_tasks');
  }

  deleteTask(id : number): Observable<TaskModel[]> {
    return this.httpClient.delete<TaskModel[]>('http://localhost:8080/admin_tasks/' + id);
  }

  // editTask(id: number): Observable<TaskModel[]> {
  //    return this.httpClient.put<TaskModel[]>('http://localhost:8080/admin_tasks/' + id);
  //  }
  // getAllFeedback(): Observable<OrganizationModel[]> {
  //   return this.hhtpClient.get<OrganizationModel[]>('http://localhost:8080/admin_feedback');
  // }
  

  
}
