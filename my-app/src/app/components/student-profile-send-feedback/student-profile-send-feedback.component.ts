import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentServiceService } from 'src/app/services/userServices/student/student-service.service';
import { FeedbackModel } from 'src/app/models/feedbackModel';

@Component({
  selector: 'app-student-profile-send-feedback',
  templateUrl: './student-profile-send-feedback.component.html',
  styleUrls: ['./student-profile-send-feedback.component.css']
})
export class StudentProfileSendFeedbackComponent implements OnInit {

  newFeedbackFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private studentService: StudentServiceService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.initnewFeedbackFormGroup();
  }

  private initnewFeedbackFormGroup() {
    this.newFeedbackFormGroup = this.formBuilder.group({
      mark: ['', [Validators.required]],
      text: ['', [Validators.required]]
    });
  }

    onSubmit() {
      let feedbackData : FeedbackModel = {
        mark: this.newFeedbackFormGroup.controls.mark.value,
        text: this.newFeedbackFormGroup.controls.text.value
      };
      this.studentService.sendFeedback(feedbackData);
  }

}
