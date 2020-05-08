import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-profile-feedback',
  templateUrl: './admin-profile-feedback.component.html',
  styleUrls: ['./admin-profile-feedback.component.css']
})
export class AdminProfileFeedbackComponent implements OnInit {

  feedbackData = [
    { name: "Ростелеком", mark: "5", date: "21.22.1998", text: "Очень хвалебный отзыв о работе", status: "Успешно пройдено" },
    { name: "Ростелеком", mark: "5", date: "21.22.1998", text: "Очень хвалебный отзыв о работе", status: "Успешно пройдено" },
    { name: "Ростелеком", mark: "5", date: "21.22.1998", text: "Очень хвалебный отзыв о работе", status: "Успешно пройдено" }
  ]
  
  constructor(private adminService : AdminServiceService) { }

  ngOnInit(): void {
  }

}
