import { Component } from '@angular/core';
import { Task } from '../model/Task.interface';
import { DataBaseService } from '../service/data-base.service';

@Component({
  selector: 'app-on-hold',
  templateUrl: './on-hold.component.html',
  styleUrls: ['./on-hold.component.css']
})
export class OnHoldComponent  {

  TaskList: Array<Task> = [];
  displayedColumns = ['category', 'send', 'company', 'vim', 'star'];


  constructor(public dataService: DataBaseService) {
    this.dataService.getTaskListObs().subscribe((Tasks: Array<Task>) => {
      this.TaskList = Tasks.filter(t => t.category === 'On Hold');
    });

  }
  addToEscalations(task: Task) {
    this.dataService.addToEscalations(task);
  }

  addToDoneByMe(task: Task) {
    this.dataService.addToDoneByMe(task);
  }

}
