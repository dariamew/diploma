import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isShow = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isShow = !this.isShow;
  }

}
