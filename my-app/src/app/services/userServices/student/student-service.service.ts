import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { Student } from '../../../models/users/student';
import { FetchStudentResult } from 'src/app/models/users/fetchStudentModel';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EditStudentModel } from '../../../models/editStudentModel';
import { SkillsModel } from 'src/app/models/skillsModel';
import { RequestionList } from 'src/app/models/requestionList';
import { FeedbackModel } from 'src/app/models/feedbackModel';
import { FeedbackList } from 'src/app/models/feedbackList';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private httpClient: HttpClient) { }
  
  getStudent(id?: string): Observable<Student> {

    if (isNullOrUndefined(id)) {
      return this.httpClient.get<FetchStudentResult>("http://localhost:8080/self").pipe(
        map(result => result.userData)
       );
    } else {
      return this.httpClient.get<FetchStudentResult>(`http://localhost:8080/student/${id}`).pipe(
        map(result => result.userData)
      );
    }
  }

  editStudent(id: number, editData: EditStudentModel): Observable<EditStudentModel> {
      return this.httpClient.post<EditStudentModel>('http://localhost:8080/edit_student/'+ id, editData);
  
  }

  createSkills(skillsData: SkillsModel): Observable<SkillsModel> {
    return this.httpClient.post<SkillsModel>('http://localhost:8080/add_skills', skillsData);
  }

  getSkills(id: number): Observable<SkillsModel[]> {
    return this.httpClient.get<SkillsModel[]>('http://localhost:8080/get_skills/' + id);
  }

  deleteStudent (id: number): Observable<Student> {
    return this.httpClient.delete<Student>('http://localhost:8080/delete_student/'+ id);
  }

  sendRequestion(id: number): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/send_requestion', { id: id });
  }

  getRequestions(id: number): Observable<RequestionList[]> {
    return this.httpClient.get<RequestionList[]>('http://localhost:8080/student_requestions/'+ id);

  }

  deleteRequestion (id: number): Observable<RequestionList> {
    return this.httpClient.delete<RequestionList>('http://localhost:8080/delete_requestion/'+ id);
  }

  sendFeedback(feedbackData: FeedbackModel): Observable<FeedbackModel> {
    return this.httpClient.post<FeedbackModel>('http://localhost:8080/student_feedback', feedbackData);
  }

  getFeedback(id: number): Observable<FeedbackList[]> {
    return this.httpClient.get<FeedbackList[]>('http://localhost:8080/student_feedback_list/' + id);
  }

}