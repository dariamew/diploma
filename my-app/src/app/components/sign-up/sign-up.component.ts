import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MethodCall } from '@angular/compiler';
import { OrganizationModel } from 'src/app/models/signUpOrganizationModel';
import { StudentModel } from 'src/app/models/signUpStudentModel';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  studentFormGroup: FormGroup;
  organizationFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  registrationState = 0; // 0 - student, 1 - organization

  changeHandler(event) {
    this.registrationState = event;
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.initStudentFormGroup();
    this.initOrganizationFormGroup();
  }

  private initStudentFormGroup() {
    this.studentFormGroup = this.formBuilder.group({
      fio: ['Вася Пупкин', [Validators.required]],
      faculty: ['Погромирование', [Validators.required]],
      group: ['228', [Validators.required]],
      tel: ['89057778833', [Validators.required]],
      portfolio: ['http//google.com', [Validators.required]],
      contacts: ['http//google.com', [Validators.required]],
      mail: ['pochta@mail.ru', [Validators.required, Validators.email]],
      pass: ['strongpass', [Validators.required]]
    });
  }

  private initOrganizationFormGroup() {
    this.organizationFormGroup = this.formBuilder.group({
      name: ['Очень крутая ит компания', [Validators.required]],
      description: ['очень крутое описание', [Validators.required]],
      address: ['Ули Пушкина, дом Колотушкина', [Validators.required]],
      tel: ['89048886627', [Validators.required]],
      mail: ['pochta228@mail.ru', [Validators.required, Validators.email]],
      pass: ['stronkpass', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.registrationState == 0) {
      let studentData : StudentModel = {
        fio: this.studentFormGroup.controls.fio.value,
        faculty: this.studentFormGroup.controls.faculty.value,
        group: this.studentFormGroup.controls.group.value,
        tel: this.studentFormGroup.controls.tel.value,
        portfolio: this.studentFormGroup.controls.portfolio.value,
        contacts: this.studentFormGroup.controls.contacts.value,
        email: this.studentFormGroup.controls.mail.value,
        password: this.studentFormGroup.controls.pass.value
      };
      this.authService.signUpStudent(studentData);
      //console.log(this.studentFormGroup.value);
    } else {
      let organizationData : OrganizationModel = {
        email: this.organizationFormGroup.controls.mail.value,
        password: this.organizationFormGroup.controls.pass.value,
        name: this.organizationFormGroup.controls.name.value,
        description: this.organizationFormGroup.controls.description.value,
        address: this.organizationFormGroup.controls.address.value,
        tel: this.organizationFormGroup.controls.tel.value
      };
      
     this.authService.signUpOrganization(organizationData).subscribe(data => {
    console.log(data);
    });
    }
  }
}
