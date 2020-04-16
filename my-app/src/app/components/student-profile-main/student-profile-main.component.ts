import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-profile-main',
  templateUrl: './student-profile-main.component.html',
  styleUrls: ['./student-profile-main.component.css']
})
export class StudentProfileMainComponent implements OnInit {

  student = {
    fio: "Алиса Андреевна Иванова",
    rating: 5
  };
  shortname = "АИ"
  /* shortenName(fio:string) {
    this.student.fio = fio;
    for()
  
  } */
  constructor() { }

  ngOnInit(): void {
  }

}
