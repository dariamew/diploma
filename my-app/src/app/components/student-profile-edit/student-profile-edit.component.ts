import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileService } from 'src/app/services/edit-profile.service';
import { EditStudentModel } from 'src/app/models/editStudentModel';
import { StudentServiceService } from 'src/app/services/userServices/student/student-service.service';

@Component({
  selector: 'app-student-profile-edit',
  templateUrl: './student-profile-edit.component.html',
  styleUrls: ['./student-profile-edit.component.css']
})
export class StudentProfileEditComponent implements OnInit {

  editProfileFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,  private editProfileService: EditProfileService, private studentService: StudentServiceService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.initEditProfileFormGroup();
  }

  private initEditProfileFormGroup() {
    this.editProfileFormGroup = this.formBuilder.group({
      fio: ['', [Validators.required]],
      faculty: ['', [Validators.required]],
      group: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      portfolio: ['', [Validators.required]],
      contacts: ['', [Validators.required]]
    });
  }

  onSubmit() {
    let editStudentData : EditStudentModel = {
      fio: this.editProfileFormGroup.controls.fio.value,
      faculty: this.editProfileFormGroup.controls.faculty.value,
      group: this.editProfileFormGroup.controls.group.value,
      tel: this.editProfileFormGroup.controls.tel.value,
      portfolio: this.editProfileFormGroup.controls.portfolio.value,
      contacts: this.editProfileFormGroup.controls.contacts.value
    };
    this.editProfileService.editStudentProfile(editStudentData);
  }

  deleteProfile(id: string) {
    this.studentService.deleteStudent(id);
  }

}
