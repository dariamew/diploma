import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-profile-info',
  templateUrl: './student-profile-info.component.html',
  styleUrls: ['./student-profile-info.component.css']
})
export class StudentProfileInfoComponent implements OnInit {

  studentData = [
    { title: "Направление", value: "Программирование" },
    { title: "Номер группы", value: "768" },
    { title: "Телефон", value: "89047787645" },
    { title: "Почта", value: "pochta@mail.ru" },
    { title: "Портфолио", value: "https://github.com" },
    { title: "Соцсети", value: "https://github.com" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
