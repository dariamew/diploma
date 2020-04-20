import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-profile-task-list',
  templateUrl: './organization-profile-task-list.component.html',
  styleUrls: ['./organization-profile-task-list.component.css']
})
export class OrganizationProfileTaskListComponent implements OnInit {

  TaskData = [
    { description: "Сделать сайт", skills: "HTML, CSS, PHP, SQL", type: "Практика", amount: "10" },
    { description: "Сделать сайт", skills: "HTML, CSS, PHP, SQL", type: "Практика", amount: "10" },
    { description: "Сделать сайт", skills: "HTML, CSS, PHP, SQL", type: "Практика", amount: "10" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
