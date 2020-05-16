import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { Student } from '../../../models/users/student';
import { FetchStudentResult } from 'src/app/models/users/fetchStudentModel';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EditStudentModel } from '../../../models/editStudentModel';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private httpClient: HttpClient) { }
  
  getStudent(id?: string): Observable<Student> {
    // console.log("Пошла загрузка пользователя с id", id);

    if (isNullOrUndefined(id)) {
      return this.httpClient.get<FetchStudentResult>("http://localhost:8080/self").pipe(
        map(result => result.userData)
       );
    } else {
      return this.httpClient.get<FetchStudentResult>(`http://localhost:8080/students/${id}`).pipe(
        map(result => result.userData)
      );
    }
  }

  editStudent(id: number, editData: EditStudentModel): Observable<EditStudentModel> {
      return this.httpClient.post<EditStudentModel>('http://localhost:8080/edit_student/'+ id, editData);
  
  }

  deleteStudent (id: number): Observable<Student> {
    return this.httpClient.delete<Student>('http://localhost:8080/delete_student/'+ id);
  }

}