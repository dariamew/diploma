import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackModel } from 'src/app/models/feedbackModel';
import { OrganizationServiceService } from 'src/app/services/userServices/organization/organization-service.service';
import { flatMap, map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organization-profile-feedback',
  templateUrl: './organization-profile-feedback.component.html',
  styleUrls: ['./organization-profile-feedback.component.css']
})
export class OrganizationProfileFeedbackComponent implements OnInit {
  
  newFeedbackFormGroup: FormGroup;
  id: string;

  constructor(private formBuilder: FormBuilder, private organizationService: OrganizationServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();

    this.activatedRoute.paramMap.pipe(
      tap(params => console.log("params", params)),
      map(params => params.get("id")),
      map(id => this.id = id)
    ).subscribe();
  }

  private initForm() {
    this.initnewFeedbackFormGroup();
  }

  private initnewFeedbackFormGroup() {
    this.newFeedbackFormGroup = this.formBuilder.group({
      mark: ['', [Validators.required]],
      text: ['', [Validators.required]],
      isCompleted: ['', [Validators.required]]
    });
  }

  onSubmit(id: string) {
      let feedbackData : FeedbackModel = {
        id: id,
        mark: this.newFeedbackFormGroup.controls.mark.value,
        text: this.newFeedbackFormGroup.controls.text.value,
        isCompleted: this.newFeedbackFormGroup.controls.isCompleted.value
      };
      this.organizationService.sendFeedback(feedbackData).subscribe(data => {
        console.log(data);
      });
  }
}
