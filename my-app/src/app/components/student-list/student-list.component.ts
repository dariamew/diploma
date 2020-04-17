import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  userData = [
    { fio: "Имя Фамилия Отчество", faculty: "Программирование", group: "888" },
    { fio: "Имя Фамилия Отчество", faculty: "Программирование", group: "888" },
    { fio: "Имя Фамилия Отчество", faculty: "Программирование", group: "888" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
