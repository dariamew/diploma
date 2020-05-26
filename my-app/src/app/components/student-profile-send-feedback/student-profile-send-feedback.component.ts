import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentServiceService } from 'src/app/services/userServices/student/student-service.service';
import { FeedbackModel } from 'src/app/models/feedbackModel';
import { ActivatedRoute } from '@angular/router';
import { flatMap, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-student-profile-send-feedback',
  templateUrl: './student-profile-send-feedback.component.html',
  styleUrls: ['./student-profile-send-feedback.component.css']
})
export class StudentProfileSendFeedbackComponent implements OnInit {

  newFeedbackFormGroup: FormGroup;
  id: string;

  constructor(private formBuilder: FormBuilder, private studentService: StudentServiceService, private activatedRoute: ActivatedRoute) { }

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
      text: ['', [Validators.required]]
    });
  }

    onSubmit(id: string) {
      let feedbackData : FeedbackModel = {
        id: id,
        mark: this.newFeedbackFormGroup.controls.mark.value,
        text: this.newFeedbackFormGroup.controls.text.value
      };
      this.studentService.sendFeedback(feedbackData).subscribe(data => {
        console.log(data);
      });
  }

}
