import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Counter } from 'src/app/models/counter'

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor(private httpClient: HttpClient) { }

  getCounter(): Observable<Counter> {
    return this.httpClient.get<Counter>('http://localhost:8080/counter');
  }
}
