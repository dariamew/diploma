import { Component, OnInit } from '@angular/core';
import { GetListsService } from 'src/app/services/get-lists.service';
import { OrganizationModel } from 'src/app/models/organizationModel';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {

  organizations: OrganizationModel[]= [];
  userData = [
    { name: "Ростелеком", description: "Описание очень длинннннннннннннннннооооооооооооооееееееееееее" },
    { name: "Ростелеком", description: "Описание очень длинннннннннннннннннооооооооооооооееееееееееее" },
    { name: "Ростелеком", description: "Описание очень длинннннннннннннннннооооооооооооооееееееееееее" },
  ];

  constructor(private organizationService : GetListsService) { }

  ngOnInit(): void {
    this.organizationService.getOrganizations().subscribe(result => {
      this.organizations = result;
    }, error => console.log(error));
  }

}
