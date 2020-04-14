import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 
  constructor() { }
  registrationState = 0; // 0 - student, 1 - organization

  changeHandler(event) {
    this.registrationState = event;
  }
  ngOnInit(): void {
  }

}
