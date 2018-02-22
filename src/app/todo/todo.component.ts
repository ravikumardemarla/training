import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { TodoModel } from '../model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todoList: Array<TodoModel> = [];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.callTodoService();
  }

  /**
   * get all available todo list info
   * @returns null
   */
  private callTodoService(): void {
    this.todoService.getTodoList().subscribe((resp) => {
      this.todoList = resp;
    });
  }
}
