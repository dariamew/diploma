import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/users/student';
import { flatMap, map, tap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StudentServiceService } from 'src/app/services/userServices/student/student-service.service';

@Component({
  selector: 'app-student-profile-info',
  templateUrl: './student-profile-info.component.html',
  styleUrls: ['./student-profile-info.component.css']
})
export class StudentProfileInfoComponent implements OnInit {

  student: Student;

  constructor(private activatedRoute: ActivatedRoute, private studentService: StudentServiceService) { }

  ngOnInit(): void {
    console.log("StudentComponent init");

    this.activatedRoute.paramMap.pipe(
      tap(params => console.log("params", params)),
      map(params => params.get("id")),
      flatMap(id => this.studentService.getStudent(id)),
      tap(student => console.log("fetch student result: ", student)),
      tap(student => this.student = student)
    ).subscribe();
  }

}
