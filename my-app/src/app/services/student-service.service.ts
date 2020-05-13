import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { Student } from '../models/users/student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private httpClient: HttpClient) { }
  
  getStudent(id?: string): Observable<Student> {
    // console.log("Пошла загрузка пользователя с id", id);
    // return this.fakeNetworkService.getStudent(id);

    if (isNullOrUndefined(id)) {
      return this.httpClient.get<Student>("http://localhost:8080/self");
    } else {
      return this.httpClient.get<Student>(`http://localhost:8080/students/${id}`);
    }
  }
}
