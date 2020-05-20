import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentServiceService } from 'src/app/services/userServices/student/student-service.service';
import { Student } from 'src/app/models/users/student';
import { flatMap, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  student: Student;

  constructor(private authService: AuthService, public router: Router, private activatedRoute: ActivatedRoute, 
    private studentService: StudentServiceService) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.pipe(
      tap(params => console.log("params", params)),
      map(params => params.get("id")),
      flatMap(id => this.studentService.getStudent(id)),
      tap(student => console.log("fetch student result: ", student)),
      tap(student => this.student = student)
    ).subscribe();

  }

  logout() {
    this.authService.logout(true);
  }

}
