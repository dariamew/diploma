import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {

  userData = [
    { fio: "Имя Фамилия Отчество", faculty: "Программирование", group: "888" },
    { fio: "Имя Фамилия Отчество", faculty: "Программирование", group: "888" },
    { fio: "Имя Фамилия Отчество", faculty: "Программирование", group: "888" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
