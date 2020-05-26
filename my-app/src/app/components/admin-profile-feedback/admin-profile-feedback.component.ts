import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/userServices/admin/admin-service.service';
import { ActivatedRoute } from '@angular/router';
import { AdminFeedbackModel } from 'src/app/models/adminFeedbackList';

@Component({
  selector: 'app-admin-profile-feedback',
  templateUrl: './admin-profile-feedback.component.html',
  styleUrls: ['./admin-profile-feedback.component.css']
})
export class AdminProfileFeedbackComponent implements OnInit {

  feedback: AdminFeedbackModel[] = [];

  constructor(private adminService : AdminServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.adminService.getAllFeedback().subscribe(result => {
      this.feedback = result;
    }, error => console.log(error));
  }

  deleteFeedback(id : number) {
    this.adminService.deleteFeedback(id).subscribe(data => {
      console.log(data);
    });
   }

}
