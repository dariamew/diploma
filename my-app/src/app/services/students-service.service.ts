import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { StudentModel } from '../models/signUpStudentModel';

@Injectable({
  providedIn: 'root'
})
export class StudentsServiceService {

  constructor(private hhtpClient: HttpClient) { }

  getStudents(): Observable<StudentModel[]> {
     return this.hhtpClient.get<StudentModel[]>('http://localhost:8080/student_list');
  }
}
