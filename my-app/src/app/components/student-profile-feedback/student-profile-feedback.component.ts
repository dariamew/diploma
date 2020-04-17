import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-profile-feedback',
  templateUrl: './student-profile-feedback.component.html',
  styleUrls: ['./student-profile-feedback.component.css']
})
export class StudentProfileFeedbackComponent implements OnInit {

  feedbackData = [
    { name: "Ростелеком", mark: "5", date: "21.22.1998", text: "Очень хвалебный отзыв о работе", status: "Успешно пройдено" },
    { name: "Ростелеком", mark: "5", date: "21.22.1998", text: "Очень хвалебный отзыв о работе", status: "Успешно пройдено" },
    { name: "Ростелеком", mark: "5", date: "21.22.1998", text: "Очень хвалебный отзыв о работе", status: "Успешно пройдено" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
