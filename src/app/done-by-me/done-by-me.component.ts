import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task.interface';
import { DataBaseService } from '../service/data-base.service';

@Component({
  selector: 'app-done-by-me',
  templateUrl: './done-by-me.component.html',
  styleUrls: ['./done-by-me.component.css']
})
export class DoneByMeComponent {

  TaskList: Array<Task> = [];
  displayedColumns = ['category', 'send', 'company', 'vim', 'star'];


  constructor(public dataService: DataBaseService) {
    this.dataService.getTaskListObs().subscribe((Tasks: Array<Task>) => {
      this.TaskList = Tasks.filter(t => t.category === 'Done By Me');
    });

  }
  addToOnHold(task: Task) {
    this.dataService.addToOnHold(task);
  }
  addToEscalations(task: Task) {
    this.dataService.addToEscalations(task);
  }

}
