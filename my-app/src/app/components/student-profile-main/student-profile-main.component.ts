import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StudentServiceService } from 'src/app/services/userServices/student/student-service.service';
import { Student } from 'src/app/models/users/student';
import { flatMap, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-student-profile-main',
  templateUrl: './student-profile-main.component.html',
  styleUrls: ['./student-profile-main.component.css']
})
export class StudentProfileMainComponent implements OnInit {

  student: Student;

  constructor(private activatedRoute: ActivatedRoute, private studentService: StudentServiceService) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.pipe(
      tap(params => console.log("params", params)),
      map(params => params.get("id")),
      flatMap(id => this.studentService.getStudent(id)),
      tap(student => console.log("fetch student result: ", student)),
      tap(student => this.student = student)
    ).subscribe();
  }

}
