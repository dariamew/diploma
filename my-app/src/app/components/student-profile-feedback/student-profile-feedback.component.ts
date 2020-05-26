import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/services/userServices/student/student-service.service';
import { FeedbackList } from 'src/app/models/feedbackList';
import { flatMap, map, tap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Student } from 'src/app/models/users/student';

@Component({
  selector: 'app-student-profile-feedback',
  templateUrl: './student-profile-feedback.component.html',
  styleUrls: ['./student-profile-feedback.component.css']
})
export class StudentProfileFeedbackComponent implements OnInit {

  student: Student;
  feedback: FeedbackList[] = [];

  constructor(private activatedRoute: ActivatedRoute, private studentService: StudentServiceService, ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.pipe(
      tap(params => console.log("params", params)),
      map(params => params.get("id")),
      flatMap(id => this.studentService.getStudent(id)),
      tap(student => this.student = student),
      tap(student => this.studentService.getFeedback(student.id).subscribe(result => {
        this.feedback = result;
      })),
    ).subscribe();
  }

}
