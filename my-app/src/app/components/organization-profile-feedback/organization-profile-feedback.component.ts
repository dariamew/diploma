import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackModel } from 'src/app/models/feedbackModel';
import { NewFeedbackService } from 'src/app/services/new-feedback.service';

@Component({
  selector: 'app-organization-profile-feedback',
  templateUrl: './organization-profile-feedback.component.html',
  styleUrls: ['./organization-profile-feedback.component.css']
})
export class OrganizationProfileFeedbackComponent implements OnInit {
  newFeedbackFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private newFeedbackService: NewFeedbackService ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.initnewFeedbackFormGroup();
  }

  private initnewFeedbackFormGroup() {
    this.newFeedbackFormGroup = this.formBuilder.group({
      mark: ['Сделать сайт', [Validators.required]],
      text: ['JS, Angular, SQL, PHP', [Validators.required]],
      isCompleted: ['Практика/Стажировка', [Validators.required]]
    });
  }

  onSubmit() {
      let feedbackData : FeedbackModel = {
        mark: this.newFeedbackFormGroup.controls.mark.value,
        text: this.newFeedbackFormGroup.controls.text.value,
        isCompleted: this.newFeedbackFormGroup.controls.isCompleted.value
      };
      this.newFeedbackService.sendFeedback(feedbackData);
  }
}
