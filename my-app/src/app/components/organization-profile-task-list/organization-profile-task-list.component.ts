import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../../models/taskModel';
import { ActivatedRoute } from '@angular/router';
import { flatMap, map, tap } from 'rxjs/operators';
import { OrganizationServiceService } from 'src/app/services/userServices/organization/organization-service.service';
import { Organization } from '../../models/users/organization';

@Component({
  selector: 'app-organization-profile-task-list',
  templateUrl: './organization-profile-task-list.component.html',
  styleUrls: ['./organization-profile-task-list.component.css']
})
export class OrganizationProfileTaskListComponent implements OnInit {

  task : TaskModel[] = [];
  organization : Organization;

  constructor(private organizationService: OrganizationServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.pipe(
      tap(params => console.log("params", params)),
      map(params => params.get("id")),
      flatMap(id => this.organizationService.getOrganization(id)),
      tap(organization => console.log("fetch organization result: ", organization)),
      tap(organization => this.organization = organization),
      tap(organization => this.organizationService.getTasks(organization.id).subscribe(result => {
        this.task = result;
      }))
    ).subscribe();

  }

  deleteTask(id : number) {
    this.organizationService.deleteTask(id).subscribe(data => {
      console.log(data);
    });
   }

}
