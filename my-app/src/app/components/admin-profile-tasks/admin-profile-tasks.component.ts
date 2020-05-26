import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/userServices/admin/admin-service.service';
import { TaskModel } from '../../models/taskModel'

@Component({
  selector: 'app-admin-profile-tasks',
  templateUrl: './admin-profile-tasks.component.html',
  styleUrls: ['./admin-profile-tasks.component.css']
})
export class AdminProfileTasksComponent implements OnInit {

  tasks : TaskModel[] = [];

  
  constructor(private adminService : AdminServiceService) { }

  ngOnInit(): void {
    this.adminService.getAllTasks().subscribe(result => {
      this.tasks = result;
    }, error => console.log(error));
  }


   deleteTask(id : number) {
    this.adminService.deleteTask(id).subscribe(data => {
      console.log(data);
    });
   }

}
