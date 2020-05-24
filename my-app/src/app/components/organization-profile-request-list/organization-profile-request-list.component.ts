import { Component, OnInit } from '@angular/core';
import { OrganizationServiceService } from 'src/app/services/userServices/organization/organization-service.service';
import { flatMap, map, tap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Organization } from '../../models/users/organization';
import { RequestionList } from 'src/app/models/requestionList';

@Component({
  selector: 'app-organization-profile-request-list',
  templateUrl: './organization-profile-request-list.component.html',
  styleUrls: ['./organization-profile-request-list.component.css']
})
export class OrganizationProfileRequestListComponent implements OnInit {

  organization : Organization;
  requestions: RequestionList[] = [];
  resolvedRequestions: RequestionList[] = [];

  constructor(private activatedRoute: ActivatedRoute, private organizationService: OrganizationServiceService) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.pipe(
      tap(params => console.log("params", params)),
      map(params => params.get("id")),
      flatMap(id => this.organizationService.getOrganization(id)),
      tap(organization => console.log("fetch organization result: ", organization)),
      tap(organization => this.organization = organization),
      tap(organization => this.organizationService.getRequestions(organization.id).subscribe(result => {
        this.requestions = result;
      })),
      tap(organization => this.organizationService.getResolvedRequestions(organization.id).subscribe(result => {
        this.resolvedRequestions = result;
      }))
    ).subscribe();
  }

  acceptRequestion(id: number) {
    this.organizationService.acceptRequestion(id).subscribe(data => {
      console.log(data);
    });

  }

  rejectRequestion(id: number) {
    this.organizationService.rejectRequestion(id).subscribe(data => {
      console.log(data);
    });

  }

  // isNew = false;
  // isAccepted = false;
  // isRejected = false;

  // defineCurrentState(stateId: number) {
  //    switch(stateId) {
  //      case 1:
  //        return this.isNew = true;
  //       case 2:
  //        return this.isRejected = true;
  //       case 3:
  //        return this.isAccepted = true;
  //    }


  // }

}
