import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/otherServices/counter.service';
import { Counter } from 'src/app/models/counter'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  counter : Counter;

  isShow = false;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterService.getCounter().subscribe(result => {
      this.counter = result[0];
      console.log(this.counter);
    }, error => console.log(error));
  }

  toggleMenu() {
    this.isShow = !this.isShow;
  }
 
}
