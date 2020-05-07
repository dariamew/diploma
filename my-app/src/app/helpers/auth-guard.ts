// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// import { AuthService } from '../services/auth.service';

// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {
//     constructor(
//         private router: Router,
//         private authService: AuthService
//     ) { }

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         const currentUser = this.authService.currentUserValue;
//         if (currentUser) {
//             // проверка достпен ли рут для роли данного пользователя
//             if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
//                 // ресли роль не авторизована
//                 this.router.navigate(['/']);
//                 return false;
//             }

//             // если роль авторизована
//             return true;
//         }

//         // в случае неудачи редирект на страницу с логином
//         this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
//         return false;
//     }
// }