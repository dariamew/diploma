import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditOrganizationModel } from 'src/app/models/editOrganizationModel';
import { Organization } from '../../models/users/organization';
import { flatMap, map, tap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OrganizationServiceService } from 'src/app/services/userServices/organization/organization-service.service';

@Component({
  selector: 'app-organization-profile-edit',
  templateUrl: './organization-profile-edit.component.html',
  styleUrls: ['./organization-profile-edit.component.css']
})
export class OrganizationProfileEditComponent implements OnInit {

  organization : Organization;
  editProfileFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private organizationService: OrganizationServiceService , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();

    this.activatedRoute.paramMap.pipe(
      tap(params => console.log("params", params)),
      map(params => params.get("id")),
      flatMap(id => this.organizationService.getOrganization(id)),
      tap(organization => console.log("fetch organization result: ", organization)),
      tap(organization => this.organization = organization),
      tap(organization => this.fillForm(organization))
    ).subscribe();
   console.log(this.editProfileFormGroup.value);
    }

  private initForm() {
    this.initEditProfileFormGroup();
  }

  private fillForm(organization: Organization) {
    this.editProfileFormGroup.setValue({
      name: `${organization.name}`,
      description: `${organization.description}`,
      address: `${organization.address}`,
      tel: `${organization.tel}`
    });
  }

  private initEditProfileFormGroup() {
    this.editProfileFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      address: ['', [Validators.required]],
      tel: ['', [Validators.required]]
    });
  }

  onSubmit(id: number) {
    let editOrganizationData : EditOrganizationModel = {
      name: this.editProfileFormGroup.controls.name.value,
      description: this.editProfileFormGroup.controls.description.value,
      address: this.editProfileFormGroup.controls.address.value,
      tel: this.editProfileFormGroup.controls.tel.value
    };
    this.organizationService.editOrganization(id, editOrganizationData).subscribe(data => {
      console.log(data);
    });
  }

  deleteProfile(id: number) {
    this.organizationService.deleteOrganization(id).subscribe(data => {
      console.log(data);
    });
  }

}
