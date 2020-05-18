import { Component, OnInit } from '@angular/core';
import { GetListsService } from 'src/app/services/otherServices/get-lists.service';
import { OrganizationModel } from 'src/app/models/organizationModel';
import { ActivatedRoute } from '@angular/router';
import { OrganizationServiceService } from 'src/app/services/userServices/organization/organization-service.service';
import { flatMap, map, tap } from 'rxjs/operators';
import { Organization } from '../../models/users/organization';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {
  organization : Organization;
  organizations: OrganizationModel[] = [];

  constructor(private getListsService : GetListsService, private activatedRoute: ActivatedRoute, private organizationService: OrganizationServiceService) { }

  ngOnInit(): void {
    this.getListsService.getOrganizations().subscribe(result => {
      this.organizations = result;
    }, error => console.log(error));

    this.activatedRoute.paramMap.pipe(
      tap(params => console.log("params", params)),
      map(params => params.get("id")),
      flatMap(id => this.organizationService.getOrganization(id)),
      tap(organization => console.log("fetch organization result: ", organization)),
      tap(organization => this.organization = organization)
    ).subscribe();

    // tap(params => console.log("params", params)),
    //   map(params => params.get("id")),
    //   flatMap(id => this.organizationService.getTask(id)),
  }

}
