import { Component, OnInit } from '@angular/core';
import { Admin } from '../../../models/users/admin';
import { flatMap, map, tap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout(true);
  }

}
