import { Component, OnInit } from '@angular/core';
import { Organization } from '../../../models/users/organization';
import { flatMap, map, tap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OrganizationServiceService } from 'src/app/services/userServices/organization/organization-service.service';

@Component({
  selector: 'app-organization-profile',
  templateUrl: './organization-profile.component.html',
  styleUrls: ['./organization-profile.component.css']
})
export class OrganizationProfileComponent implements OnInit {

  organization : Organization;

  TaskData = [
    { description: "Сделать сайт", skills: "HTML, CSS, PHP, SQL", type: "Практика", amount: "10" },
    { description: "Сделать сайт", skills: "HTML, CSS, PHP, SQL", type: "Практика", amount: "10" },
    { description: "Сделать сайт", skills: "HTML, CSS, PHP, SQL", type: "Практика", amount: "10" }
  ]

  feedbackData = [
    { name: "Ростелеком", date: "21.22.1998", text: "Очень хвалебный отзыв о работе",  },
    { name: "Ростелеком", date: "21.22.1998", text: "Очень хвалебный отзыв о работе",  },
    { name: "Ростелеком", date: "21.22.1998", text: "Очень хвалебный отзыв о работе", }
  ]

  constructor(private activatedRoute: ActivatedRoute, private organizationService: OrganizationServiceService) { }

  ngOnInit(): void {
    console.log("OrganizationComponent init")

    setTimeout(() => {
      this.activatedRoute.paramMap.pipe(
              tap(params => console.log("params", params)),
              map(params => params.get("id")),
              flatMap(id => this.organizationService.getOrganization(id)),
              tap(organization => console.log("fetch organization result: ", organization)),
              tap(organization => this.organization = organization)
            ).subscribe();
    }, 3000);
  }

}
