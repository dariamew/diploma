import { Component, OnInit } from '@angular/core';
import { StudentsServiceService } from 'src/app/services/students-service.service';
import { StudentModel } from 'src/app/models/signUpStudentModel';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: StudentModel[] = [];

  userData = [
    { fio: "Имя Фамилия Отчество", faculty: "Программирование", group: "888" },
    { fio: "Имя Фамилия Отчество", faculty: "Программирование", group: "888" },
    { fio: "Имя Фамилия Отчество", faculty: "Программирование", group: "888" }
  ]

  constructor(private studentService: StudentsServiceService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(result => {
      this.students = result;
    }, error => console.log(error));
  }

}
