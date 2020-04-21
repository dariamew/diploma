import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-profile-invitation-list',
  templateUrl: './student-profile-invitation-list.component.html',
  styleUrls: ['./student-profile-invitation-list.component.css']
})
export class StudentProfileInvitationListComponent implements OnInit {

  invitations = [
    { name: "Ростелеком", date: "21.22.1998", text: "Приглашаем на практику", description: "Сделать сайт", skills: "HTML, CSS", type: "Практика", amount: "10"  },
    { name: "Ростелеком", date: "21.22.1998", text: "Приглашаем на практику", description: "Сделать сайт", skills: "HTML, CSS", type: "Практика", amount: "10"  },
    { name: "Ростелеком", date: "21.22.1998", text: "Приглашаем на практику", description: "Сделать сайт", skills: "HTML, CSS", type: "Практика", amount: "10"  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
