import { Injectable } from '@angular/core';
import { OrganizationModel } from '../models/signUpOrganizationModel';
import { StudentModel } from '../models/signUpStudentModel';
import { User } from '../models/userModel';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }


  signUpOrganization(organizationData: OrganizationModel) {
    this.httpClient.post<any>("http://localhost:8080/signup/organization", organizationData).subscribe(result =>{
       console.log(result)
      });
  }

  signUpStudent(studentData: StudentModel) {
    this.httpClient.post<any>("http://localhost:8080/signup/student", studentData).subscribe(result => console.log(result));
  }
  
  login(loginData: User) {

  this.httpClient.post<any>("http://localhost:8080/login", loginData).subscribe(result => console.log(result));
  }

  // login(email: string, password: string) {
  //   return this.httpClient.post<any>("http://localhost:8080/login", { email, password })
  //     .pipe(map(user => {
  //       //вход успешный, если в ответе токен
  //       if (user && user.token) {
  //         // помещает токен и данные пользователя в хранилище, чтобы пользователь оставался залогиненым
  //         localStorage.setItem('currentUser', JSON.stringify(user));
  //         this.currentUserSubject.next(user);
  //       }

  //       return user;
  //     }));
  // }


  logout() {
    // извлекает пользователя из хранилища для выхода 
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
