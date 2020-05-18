import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flatMap, map, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrganizationServiceService } from 'src/app/services/userServices/organization/organization-service.service';
import { EditTaskModel } from 'src/app/models/editTaskModel';
import { TaskModel } from '../../models/taskModel';

@Component({
  selector: 'app-organization-profile-edit-task',
  templateUrl: './organization-profile-edit-task.component.html',
  styleUrls: ['./organization-profile-edit-task.component.css']
})
export class OrganizationProfileEditTaskComponent implements OnInit {

  task : TaskModel;
  editTaskFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private organizationService: OrganizationServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();

    this.activatedRoute.paramMap.pipe(
      tap(params => console.log("params", params)),
      map(params => params.get("id")),
      flatMap(id => this.organizationService.getTask(id)),
      tap(task => console.log("fetch task result: ", task[0])),
      tap(task => this.task = task[0]),
      tap(task => this.editTaskFormGroup.setValue({
        description: `${task[0].description}`,
        skills: `${task[0].skills}`,
        type: `${task[0].type}`,
        maxAmount: `${task[0].maxAmount}`}))
    ).subscribe();

  }

  private initForm() {
    this.initEditTaskFormGroup();
  }

  private initEditTaskFormGroup() {
    this.editTaskFormGroup = this.formBuilder.group({
      description: ['', [Validators.required]],
      skills: ['', [Validators.required]],
      type: ['', [Validators.required]],
      maxAmount: ['', [Validators.required]]
    });
  }

  onSubmit(id: number) {
    let taskEditData : EditTaskModel = {
      description: this.editTaskFormGroup.controls.description.value,
      skills: this.editTaskFormGroup.controls.skills.value,
      type: this.editTaskFormGroup.controls.type.value,
      maxAmount: this.editTaskFormGroup.controls.maxAmount.value,
    };
    this.organizationService.editTask(id, taskEditData).subscribe(data => {
      console.log(data);
    });
}

}
