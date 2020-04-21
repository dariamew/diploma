import { Injectable } from '@angular/core';
import { FeedbackModel } from '../models/feedbackModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewFeedbackService {

  constructor(private httpClient: HttpClient) { }

  sendFeedback(feedbackData: FeedbackModel) {
    this.httpClient.post<any>("https://tasker-diploma-app.herokuapp.com/signup/students", feedbackData).subscribe(result => console.log(result));
  }
}
