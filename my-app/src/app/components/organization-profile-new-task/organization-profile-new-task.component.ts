import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTaskModel } from 'src/app/models/newTaskModel';
import { OrganizationServiceService } from 'src/app/services/userServices/organization/organization-service.service';
import { Organization } from '../../models/users/organization';
import { ActivatedRoute } from '@angular/router';
import { flatMap, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-organization-profile-new-task',
  templateUrl: './organization-profile-new-task.component.html',
  styleUrls: ['./organization-profile-new-task.component.css']
})
export class OrganizationProfileNewTaskComponent implements OnInit {

  newTaskFormGroup: FormGroup;
  organization : Organization;

  constructor(private formBuilder: FormBuilder,  private organizationService: OrganizationServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();

    this.activatedRoute.paramMap.pipe(
      tap(params => console.log("params", params)),
      map(params => params.get("id")),
      flatMap(id => this.organizationService.getOrganization(id)),
      tap(organization => console.log("fetch organization result: ", organization)),
      tap(organization => this.organization = organization)
    ).subscribe();
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

  onSubmit(id: number) {
      let taskData : NewTaskModel = {
        description: this.newTaskFormGroup.controls.description.value,
        skills: this.newTaskFormGroup.controls.skills.value,
        type: this.newTaskFormGroup.controls.type.value,
        maxAmount: this.newTaskFormGroup.controls.maxAmount.value,
      };
      this.organizationService.createTask(id, taskData).subscribe(data => {
        console.log(data);
      });
  }
}
