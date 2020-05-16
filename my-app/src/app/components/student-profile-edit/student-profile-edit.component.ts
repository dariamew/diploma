import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileService } from 'src/app/services/edit-profile.service';
import { EditStudentModel } from 'src/app/models/editStudentModel';
import { StudentServiceService } from 'src/app/services/userServices/student/student-service.service';
import { Student } from 'src/app/models/users/student';
import { flatMap, map, tap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-student-profile-edit',
  templateUrl: './student-profile-edit.component.html',
  styleUrls: ['./student-profile-edit.component.css']
})
export class StudentProfileEditComponent implements OnInit {

  student:  Student;

  editProfileFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private studentService: StudentServiceService) { }

  

  ngOnInit(): void {

    this.initForm();

    this.activatedRoute.paramMap.pipe(
      tap(params => console.log("params", params)),
      map(params => params.get("id")),
      flatMap(id => this.studentService.getStudent(id)),
      tap(student => console.log("fetch student result: ", student)),
      tap(student => this.student = student),
      tap(student => this.editProfileFormGroup.setValue({
      fio: `${student.fio}`,
      faculty: `${student.faculty}`,
      groupNumber: `${student.groupNumber}`,
      tel: `${student.tel}`,
      portfolio: `${student.portfolio}`,
      contacts: `${student.contacts}`})),
    ).subscribe();
   console.log(this.editProfileFormGroup.value);
  }

  private initForm() {
    this.initEditProfileFormGroup();
  }

  private initEditProfileFormGroup() {
    this.editProfileFormGroup = this.formBuilder.group({
      fio: ['', [Validators.required]],
      faculty: ['', [Validators.required]],
      groupNumber: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      portfolio: ['', [Validators.required]],
      contacts: ['', [Validators.required]]
    });
  }

  onSubmit( id: number ) {
    let editStudentData : EditStudentModel = {
      fio: this.editProfileFormGroup.controls.fio.value,
      faculty: this.editProfileFormGroup.controls.faculty.value,
      groupNumber: this.editProfileFormGroup.controls.groupNumber.value,
      tel: this.editProfileFormGroup.controls.tel.value,
      portfolio: this.editProfileFormGroup.controls.portfolio.value,
      contacts: this.editProfileFormGroup.controls.contacts.value
    };
    this.studentService.editStudent(id, editStudentData).subscribe(data => {
      console.log(data);
    });
  }

  deleteProfile(id: number) {
    this.studentService.deleteStudent(id).subscribe(data => {
      console.log(data);
    });
  }

}
