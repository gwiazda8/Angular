import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task.interface';
import { DataBaseService } from '../service/data-base.service';

@Component({
  selector: 'app-my-open-task',
  templateUrl: './my-open-task.component.html',
  styleUrls: ['./my-open-task.component.css']
})
export class MyOpenTaskComponent {

  TaskList: Array<Task> = [];
  displayedColumns = ['category', 'send', 'company', 'vim', 'star'];


  constructor(public dataService: DataBaseService) {
    this.dataService.getTaskListObs().subscribe((Tasks: Array<Task>) => {
      this.TaskList = Tasks.filter(t => t.category === 'My Open');
    });

  }
  addToOnHold(task: Task) {
    this.dataService.addToOnHold(task);
  }

  addToDoneByMe(task: Task) {
    this.dataService.addToDoneByMe(task);
  }

}
