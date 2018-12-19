import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task.interface';
import { DataBaseService } from '../service/data-base.service';

@Component({
  selector: 'app-escalations',
  templateUrl: './escalations.component.html',
  styleUrls: ['./escalations.component.css']
})
export class EscalationsComponent  {

  TaskList: Array<Task> = [];
  displayedColumns = ['category', 'send', 'company', 'vim', 'star'];


  constructor(public dataService: DataBaseService) {
    this.dataService.getTaskListObs().subscribe((Tasks: Array<Task>) => {
      this.TaskList = Tasks.filter(t => t.category === 'Escalations');
    });

  }

  addToOnHold(task: Task) {
    this.dataService.addToOnHold(task);
  }

  addToDoneByMe(task: Task) {
    this.dataService.addToDoneByMe(task);
  }

}
