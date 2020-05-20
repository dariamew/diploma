import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flatMap, map, tap } from 'rxjs/operators';
import { StudentServiceService } from 'src/app/services/userServices/student/student-service.service';
import { SkillsModel } from 'src/app/models/skillsModel';
import { Student } from 'src/app/models/users/student';

@Component({
  selector: 'app-student-profile-skills',
  templateUrl: './student-profile-skills.component.html',
  styleUrls: ['./student-profile-skills.component.css']
})
export class StudentProfileSkillsComponent implements OnInit {

  skills : SkillsModel[] = [];
  student: Student;

  constructor(private studentService: StudentServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.pipe(
      tap(params => console.log("params", params)),
      map(params => params.get("id")),
      flatMap(id => this.studentService.getStudent(id)),
      tap(student => console.log("fetch student result: ", student)),
      tap(student => this.student = student),
      tap(student => this.studentService.getSkills(student.id).subscribe(result => {
        this.skills = result;
      }))
    ).subscribe();

  }

}
