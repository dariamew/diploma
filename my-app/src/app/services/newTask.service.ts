import { Injectable } from '@angular/core';
import { TaskModel } from '../models/taskModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewTaskService {

  constructor(private httpClient: HttpClient) { 
    console.log("Hello");
  }
 
  method() {
    console.log("Success")
  }

  createNewTask(taskData: TaskModel) {
    this.httpClient.post<any>("https://tasker-diploma-app.herokuapp.com/signup/organizations", taskData).subscribe(result => console.log(result));
  }
  
}
