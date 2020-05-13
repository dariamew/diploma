import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> { //проверяет каждый запрос

    if (this.authService.isAuthenticated()) {
      let accessToken = this.authService.getAccessToken();

      request = request.clone({ // сетает токен в каждый запрос
        setHeaders: {
          Authorization: accessToken
        }
      });
    }

    return next.handle(request);
  }
}
