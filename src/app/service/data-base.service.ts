import { Injectable } from '@angular/core';
import { Task } from '../model/Task.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  TaskList: Array<Task> = [];

  TaksListObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.TaskList = [
      { category: 'Done By Me', send: new Date(), company: 'BMW', vim: 4330 },
      { category: 'Done By Me', send: new Date(), company: 'BMW', vim: 4331 },
      { category: 'Done By Me', send: new Date(), company: 'BMW', vim: 4332 },
      { category: 'My Open', send: new Date(), company: 'BMW', vim: 4333 },
      { category: 'My Open', send: new Date(), company: 'BMW', vim: 4334 },
      { category: 'My Open', send: new Date(), company: 'BMW', vim: 4335 },
      { category: 'My Open', send: new Date(), company: 'BMW', vim: 4336 },
      { category: 'My Open', send: new Date(), company: 'BMW', vim: 4337 },
      { category: 'My Open', send: new Date(), company: 'BMW', vim: 4338 },
      { category: 'My Open', send: new Date(), company: 'BMW', vim: 4339 },
      { category: 'My Open', send: new Date(), company: 'BMW', vim: 4340 },
      { category: 'My Open', send: new Date(), company: 'BMW', vim: 4341 },
      { category: 'My Open', send: new Date(), company: 'BMW', vim: 4342 },
      { category: 'My Open', send: new Date(), company: 'BMW', vim: 4343 },
      { category: 'My Open', send: new Date(), company: 'BMW', vim: 4344 },
      { category: 'My Open', send: new Date(), company: 'BMW', vim: 4345 },
      { category: 'My Open', send: new Date(), company: 'BMW', vim: 4346 },
      { category: 'On Hold', send: new Date(), company: 'BMW', vim: 4347 },
      { category: 'On Hold', send: new Date(), company: 'BMW', vim: 4348 },
      { category: 'On Hold', send: new Date(), company: 'BMW', vim: 4349 },
      { category: 'Done By Me', send: new Date(), company: 'BMW', vim: 4350 },
      { category: 'Done By Me', send: new Date(), company: 'BMW', vim: 4351 },
      { category: 'Escalations', send: new Date(), company: 'BMW', vim: 4352 },
      { category: 'Escalations', send: new Date(), company: 'BMW', vim: 4353 },
      { category: 'Escalations', send: new Date(), company: 'BMW', vim: 4354 },
      { category: 'Escalations', send: new Date(), company: 'BMW', vim: 4355 }
    ];
    this.TaksListObs.next(this.TaskList);
  }

  getTaskListObs(): Observable<Array<Task>> {
    return this.TaksListObs.asObservable();
  }
  addToOnHold(task: Task) {
    task.category = 'On Hold';
    const tasks = this.TaksListObs.getValue();
    this.TaksListObs.next(tasks);
  }
  addToDoneByMe(task: Task) {
    task.category = 'Done By Me';
    const tasks = this.TaksListObs.getValue();
    this.TaksListObs.next(tasks);
  }
  addToEscalations(task: Task) {
    task.category = 'Escalations';
    const tasks = this.TaksListObs.getValue();
    this.TaksListObs.next(tasks);
  }



}
