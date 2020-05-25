import { Component, OnInit } from '@angular/core';
import { flatMap, map, tap } from 'rxjs/operators';
import { RequestionList } from 'src/app/models/requestionList';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StudentServiceService } from 'src/app/services/userServices/student/student-service.service';
import { Student } from 'src/app/models/users/student';

@Component({
  selector: 'app-student-profile-request-list',
  templateUrl: './student-profile-request-list.component.html',
  styleUrls: ['./student-profile-request-list.component.css']
})
export class StudentProfileRequestListComponent implements OnInit {

  student:  Student;
  requestions: RequestionList[] = [];

  constructor(private activatedRoute: ActivatedRoute, private studentService: StudentServiceService) { }

  ngOnInit(): void {
  
    this.activatedRoute.paramMap.pipe(
        tap(params => console.log("params", params)),
        map(params => params.get("id")),
        flatMap(id => this.studentService.getStudent(id)),
        tap(student => this.student = student),
        tap(student => this.studentService.getRequestions(student.id).subscribe(result => {
          this.requestions = result;
        })), 
    ).subscribe();
  }

  deleteRequestion(id: number) {
    this.studentService.deleteRequestion(id).subscribe(data => {
      console.log(data);
    });
  }

}
