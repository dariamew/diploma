import { Injectable } from '@angular/core';
import { OrganizationModel } from '../models/signUpOrganizationModel';
import { StudentModel } from '../models/signUpStudentModel';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Observable, of } from 'rxjs';
import { SignInResult } from '../models/signInResult';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //  static adminUserType = 0;
   static studentUserType = 1;
   static organizationUserType = 2;

   private static authenticatedDataStorageKey = "authenticated-user";

  constructor(private httpClient: HttpClient, private router: Router) {
    this.logout(false);
  }

  signUpOrganization(organization: OrganizationModel): Observable<SignInResult> {
    // this.httpClient.post<any>("http://localhost:8080/signup/organization", organization).subscribe(result =>{
    //    console.log(result)
    //   });
      return this.httpClient.post<SignInResult>("http://localhost:8080/signup/organization", organization).pipe(
        tap(result => this.completeAuthenticationFlow(result))
      );
    
  }

  signUpStudent(student: StudentModel) {
    // this.httpClient.post<any>("http://localhost:8080/signup/student", student).subscribe(result => console.log(result));
    // Функция pipe принимает массив функций, которые выполняются после того, как отработает запрос на сервер
    // Функция tap просто выполняет, которая передана, как аргумент
    return this.httpClient.post<SignInResult>("http://localhost:8080/signup/student", student).pipe(
      tap(result => this.completeAuthenticationFlow(result))
    );
  }
  
  login(email: string, password: string): Observable<SignInResult> {
    return this.httpClient.post<SignInResult>("http://localhost:8080/login", { email: email, password: password }).pipe(
    // return this.fakeNetworkService.signInRequest().pipe(
      tap(result => this.completeAuthenticationFlow(result))
    );
  }

  logout(shouldRedirect: boolean) {
    this.resetAuthenticatedUser();

    if (shouldRedirect) {
      this.router.navigate(["/login"]);
    }
  }

  isAuthenticated(): boolean {
    let isAuthenticated = !isNullOrUndefined(localStorage.getItem(AuthService.authenticatedDataStorageKey));
    console.log("isAuthenticated", isAuthenticated);
    return isAuthenticated
  }

  authenticatedUserType(): number {
    let signInResult: SignInResult = JSON.parse(localStorage.getItem(AuthService.authenticatedDataStorageKey));
    console.log("sign in result", signInResult);
    return signInResult.role;
  }

  getAccessToken(): string {
    let signInResult: SignInResult = JSON.parse(localStorage.getItem(AuthService.authenticatedDataStorageKey));
    console.log("acessToken: ", signInResult.accessToken);
    return signInResult.accessToken;
  }

  resetAuthenticatedUser() { // извлекает пользователя из хранилища для выхода
    localStorage.removeItem(AuthService.authenticatedDataStorageKey);
  }

  // Utils

  private completeAuthenticationFlow(signInResult: SignInResult) {
    localStorage.setItem(AuthService.authenticatedDataStorageKey, JSON.stringify(signInResult));
    console.log("Authentication access: [/home]");
    this.router.navigate(["/home"]);
  }
  // login(loginData: User) {

  // this.httpClient.post<any>("http://localhost:8080/login", loginData).subscribe(result => console.log(result));
  // }

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


  // logout() {
  //   // извлекает пользователя из хранилища для выхода 
  //   localStorage.removeItem('currentUser');
  //   this.currentUserSubject.next(null);
  // }
}
