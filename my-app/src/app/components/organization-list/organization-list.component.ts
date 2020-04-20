import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {

  userData = [
    { name: "Ростелеком", description: "Описание очень длинннннннннннннннннооооооооооооооееееееееееее" },
    { name: "Ростелеком", description: "Описание очень длинннннннннннннннннооооооооооооооееееееееееее" },
    { name: "Ростелеком", description: "Описание очень длинннннннннннннннннооооооооооооооееееееееееее" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
