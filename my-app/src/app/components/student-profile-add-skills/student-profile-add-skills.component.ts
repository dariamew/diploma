import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentServiceService } from 'src/app/services/userServices/student/student-service.service';
import { flatMap, map, tap } from 'rxjs/operators';
import { Student } from 'src/app/models/users/student';
import { SkillsModel } from 'src/app/models/skillsModel';

@Component({
  selector: 'app-student-profile-add-skills',
  templateUrl: './student-profile-add-skills.component.html',
  styleUrls: ['./student-profile-add-skills.component.css']
})
export class StudentProfileAddSkillsComponent implements OnInit {

  student:  Student;

  addSkillsFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private studentService: StudentServiceService) { }

  ngOnInit(): void {

    this.initForm();

    this.activatedRoute.paramMap.pipe(
      tap(params => console.log("params", params)),
      map(params => params.get("id")),
      flatMap(id => this.studentService.getStudent(id)),
      tap(student => console.log("fetch student result: ", student)),
      tap(student => this.student = student)
    ).subscribe();
  }

  private initForm() {
    this.initAddSkillsFormGroup();
  }
  private initAddSkillsFormGroup() {
    this.addSkillsFormGroup = this.formBuilder.group({
      firstSkill: ['', [Validators.required]],
      secondSkill: ['', [Validators.required]],
      thirdSkill: ['', [Validators.required]],
      fourthSkill: ['', [Validators.required]],
      fifthSkill: ['', [Validators.required]],
      sixthSkill: ['', [Validators.required]],
      seventhSkill: ['', [Validators.required]]
    });
  }

  onSubmit( id: number ) {
    let skillsData : SkillsModel = {
      studentId: id,
      firstSkill: this.addSkillsFormGroup.controls.firstSkill.value,
      secondSkill: this.addSkillsFormGroup.controls.secondSkill.value,
      thirdSkill: this.addSkillsFormGroup.controls.thirdSkill.value,
      fourthSkill: this.addSkillsFormGroup.controls.fourthSkill.value,
      fifthSkill: this.addSkillsFormGroup.controls.fifthSkill.value,
      sixthSkill: this.addSkillsFormGroup.controls.sixthSkill.value,
      seventhSkill: this.addSkillsFormGroup.controls.seventhSkill.value
    };
    this.studentService.createSkills(skillsData).subscribe(data => {
      console.log(data);
    });
  }
}
