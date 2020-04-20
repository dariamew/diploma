import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-profile-request-list',
  templateUrl: './organization-profile-request-list.component.html',
  styleUrls: ['./organization-profile-request-list.component.css']
})
export class OrganizationProfileRequestListComponent implements OnInit {

  userData = [
    { fio: "Имя Фамилия Отчество", faculty: "Программирование", group: "888" },
    { fio: "Имя Фамилия Отчество", faculty: "Программирование", group: "888" },
    { fio: "Имя Фамилия Отчество", faculty: "Программирование", group: "888" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
