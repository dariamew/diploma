import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditOrganizationModel } from 'src/app/models/editOrganizationModel';
import { EditProfileService } from 'src/app/services/edit-profile.service';

@Component({
  selector: 'app-organization-profile-edit',
  templateUrl: './organization-profile-edit.component.html',
  styleUrls: ['./organization-profile-edit.component.css']
})
export class OrganizationProfileEditComponent implements OnInit {

  editProfileFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,  private editProfileService: EditProfileService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.initEditProfileFormGroup();
  }

  private initEditProfileFormGroup() {
    this.editProfileFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      address: ['', [Validators.required]],
      tel: ['', [Validators.required]]
    });
  }

  onSubmit() {
    let editOrganizationData : EditOrganizationModel = {
      name: this.editProfileFormGroup.controls.name.value,
      description: this.editProfileFormGroup.controls.description.value,
      address: this.editProfileFormGroup.controls.address.value,
      tel: this.editProfileFormGroup.controls.tel.value
    };
    this.editProfileService.editOrganizationProfile(editOrganizationData);
  }

}
