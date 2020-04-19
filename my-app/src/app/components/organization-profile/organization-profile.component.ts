import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-profile',
  templateUrl: './organization-profile.component.html',
  styleUrls: ['./organization-profile.component.css']
})
export class OrganizationProfileComponent implements OnInit {

  TaskData = [
    { description: "Сделать сайт", skills: "HTML, CSS, PHP, SQL", type: "Практика", amount: "10" },
    { description: "Сделать сайт", skills: "HTML, CSS, PHP, SQL", type: "Практика", amount: "10" },
    { description: "Сделать сайт", skills: "HTML, CSS, PHP, SQL", type: "Практика", amount: "10" }
  ]

  feedbackData = [
    { name: "Ростелеком", date: "21.22.1998", text: "Очень хвалебный отзыв о работе",  },
    { name: "Ростелеком", date: "21.22.1998", text: "Очень хвалебный отзыв о работе",  },
    { name: "Ростелеком", date: "21.22.1998", text: "Очень хвалебный отзыв о работе", }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
