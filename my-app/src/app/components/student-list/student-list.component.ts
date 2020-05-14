import { Component, OnInit } from '@angular/core';
import { GetListsService } from 'src/app/services/otherServices/get-lists.service';
import { StudentModel } from 'src/app/models/studentModel';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: StudentModel[] = [];

  constructor(private studentService: GetListsService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(result => {
      this.students = result;
    }, error => console.log(error));
  }

}
