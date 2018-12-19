import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task.interface';
import { DataBaseService } from '../service/data-base.service';

@Component({
  selector: 'app-all-task',
  templateUrl: './all-task.component.html',
  styleUrls: ['./all-task.component.css']
})
export class AllTaskComponent  {

  TaskList: Array<Task> = [];
  displayedColumns = ['category', 'send', 'company', 'vim', 'star'];


  constructor(public dataService: DataBaseService) {
    this.dataService.getTaskListObs().subscribe((Tasks: Array<Task>) => {
      this.TaskList = Tasks;
    });

  }


}
