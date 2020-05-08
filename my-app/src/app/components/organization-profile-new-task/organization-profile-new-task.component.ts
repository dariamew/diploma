import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskModel } from 'src/app/models/taskModel';
import { NewTaskService } from 'src/app/services/new-task.service';

@Component({
  selector: 'app-organization-profile-new-task',
  templateUrl: './organization-profile-new-task.component.html',
  styleUrls: ['./organization-profile-new-task.component.css']
})
export class OrganizationProfileNewTaskComponent implements OnInit {

  newTaskFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,  private newTaskService: NewTaskService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.initNewTaskFormGroup();
  }

  private initNewTaskFormGroup() {
    this.newTaskFormGroup = this.formBuilder.group({
      description: ['Сделать сайт', [Validators.required]],
      skills: ['JS, Angular, SQL, PHP', [Validators.required]],
      type: ['Практика/Стажировка', [Validators.required]],
      maxAmount: ['23', [Validators.required]]
    });
  }

  // onSubmit() {
  //     let taskData : TaskModel = {
  //       description: this.newTaskFormGroup.controls.description.value,
  //       skills: this.newTaskFormGroup.controls.faculty.value,
  //       type: this.newTaskFormGroup.controls.group.value,
  //       maxAmount: this.newTaskFormGroup.controls.tel.value,
  //     };
  //     this.newTaskService.createNewTask(taskData);
  // }
}
