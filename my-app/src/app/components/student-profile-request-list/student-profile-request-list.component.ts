import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-profile-request-list',
  templateUrl: './student-profile-request-list.component.html',
  styleUrls: ['./student-profile-request-list.component.css']
})
export class StudentProfileRequestListComponent implements OnInit {

  TaskData = [
    { description: "Сделать сайт", skills: "HTML, CSS, PHP, SQL", type: "Практика", amount: "10" },
    { description: "Сделать сайт", skills: "HTML, CSS, PHP, SQL", type: "Практика", amount: "10" },
    { description: "Сделать сайт", skills: "HTML, CSS, PHP, SQL", type: "Практика", amount: "10" }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
