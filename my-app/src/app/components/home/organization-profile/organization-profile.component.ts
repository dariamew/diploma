import { Component, OnInit } from '@angular/core';
import { Organization } from '../../../models/users/organization';
import { flatMap, map, tap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OrganizationServiceService } from 'src/app/services/userServices/organization/organization-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { TaskModel } from '../../../models/taskModel';
import { StudentServiceService } from 'src/app/services/userServices/student/student-service.service';
import { FeedbackList } from 'src/app/models/feedbackList';

@Component({
  selector: 'app-organization-profile',
  templateUrl: './organization-profile.component.html',
  styleUrls: ['./organization-profile.component.css']
})
export class OrganizationProfileComponent implements OnInit {

  organization : Organization;
  task : TaskModel[] = [];
  feedback: FeedbackList[] = [];

  constructor(private activatedRoute: ActivatedRoute, private organizationService: OrganizationServiceService, private authService: AuthService, 
    public router: Router, private studentService: StudentServiceService) { }

  ngOnInit(): void {
    console.log("OrganizationComponent init")


    this.activatedRoute.paramMap.pipe(
      tap(params => console.log("params", params)),
      map(params => params.get("id")),
      flatMap(id => this.organizationService.getOrganization(id)),
      tap(organization => console.log("fetch organization result: ", organization)),
      tap(organization => this.organization = organization),
      tap(organization => this.organizationService.getTasks(organization.id).subscribe(result => {
        this.task = result;
      })),
      tap(organization => this.organizationService.getFeedback(organization.id).subscribe(result => {
        this.feedback = result;
      })),
    ).subscribe();
  }

  logout() {
    this.authService.logout(true);
  }

  sendRequest(id: number) {
    this.studentService.sendRequestion(id).subscribe(data => {
      console.log(data);
    });
  }


}
