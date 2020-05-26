import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { TaskModel } from '../../../models/taskModel';
import { AdminFeedbackModel } from 'src/app/models/adminFeedbackList';

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

  getAllFeedback(): Observable<AdminFeedbackModel[]> {
    return this.httpClient.get<AdminFeedbackModel[]>('http://localhost:8080/admin_feedback');
  }

  deleteFeedback(id : number): Observable<AdminFeedbackModel[]> {
    return this.httpClient.delete<AdminFeedbackModel[]>('http://localhost:8080/admin_feedback/' + id);
  }
  
}
