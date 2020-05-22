import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  private signIn = "/login";
  private homeRoute = "/home";
  private homeStudentRoute = "/home/student";
  private homeOrganizationRoute = "/home/organization";
  private homeAdminRoute = "/home/admin";

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("CanActivate?", state.url);

      if (this.authService.isAuthenticated()) {
        let authenticatedUserType = this.authService.authenticatedUserType();

        if (state.url == this.homeRoute) {
          return this.resolveRoute(authenticatedUserType);
        } else if (state.url.includes(this.homeStudentRoute) || state.url.includes(this.homeOrganizationRoute) || state.url.includes(this.homeAdminRoute )) {
          return this.resolveSubRoute(state, authenticatedUserType);
        }
      } 

      return this.resolveLogOut();
   
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("CanActivateChild?");
      return true;
  }
  
  private resolveRoute(role: number): boolean {
    console.log("resolveRoute start", role);
    switch (role) {
      case AuthService.studentUserType:
        console.log("redirect to home/student");
        this.router.navigate([this.homeStudentRoute]);
        break;
      case AuthService.organizationUserType:
        console.log("redirect to home/organization");
        this.router.navigate([this.homeOrganizationRoute]);
        break;
        case AuthService.adminUserType:
        console.log("redirect to home/admin");
        this.router.navigate([this.homeAdminRoute]);
        break;
      default:
        console.log("redirect to login, cant parse role: ", role);
        return this.resolveLogOut();
    }

    return false
  }

  private resolveSubRoute(state: RouterStateSnapshot, role: number): boolean {
    console.log("resolveSubRoute start");
    if (this.isUserRoleConfirmRoute(state, role)) {
      return true;
    } else {
      return this.resolveLogOut();
    }
  }

  private resolveLogOut(): boolean {
    console.log("resolveLogOut start");
    this.authService.logout(false);
    this.router.navigate([this.signIn]);
    return false;
  }

  private isUserRoleConfirmRoute(state: RouterStateSnapshot, role: number): boolean {
    console.log("isUserRoleConfirmRoute", state.url, role);
    switch (role) {
      case AuthService.studentUserType:
        return state.url.includes(this.homeStudentRoute);
      case AuthService.organizationUserType:
        return state.url.includes(this.homeOrganizationRoute);
      case AuthService.adminUserType:
        return state.url.includes(this.homeAdminRoute);
      default:
        return false;
    }
  }
}
