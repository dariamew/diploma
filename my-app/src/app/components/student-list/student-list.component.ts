import { Component, OnInit } from '@angular/core';
import { GetListsService } from 'src/app/services/otherServices/get-lists.service';
import { StudentModel } from 'src/app/models/studentModel';
import { flatMap, map, tap } from 'rxjs/operators';
import { Student } from '../../models/users/student';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from 'src/app/services/userServices/student/student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  student : Student;
  students: StudentModel[] = [];

  constructor(private getListsService: GetListsService, private activatedRoute: ActivatedRoute, private studentService: StudentServiceService) { }

  ngOnInit(): void {
    this.getListsService.getStudents().subscribe(result => {
      this.students = result;
    }, error => console.log(error));

    this.activatedRoute.paramMap.pipe(
      tap(params => console.log("params", params)),
      map(params => params.get("id")),
      flatMap(id => this.studentService.getStudent(id)),
      tap(student => console.log("fetch organization result: ", student)),
      tap(student => this.student = student)
    ).subscribe();
  }

  

}
