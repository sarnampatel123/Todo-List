import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo[] | undefined;

  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {
    this.todo = [
      {
        content: "First todo",
        completed: false
      },
      {
        content: "Second todo",
        completed: false
      }
    ]
  }

  toggleDone(id: number) {
    this.todo?.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    });
  }

  deleteTodo(id: number) {
    this.todo = this.todo?.filter((v, i) => i !== id);
  }

  addTodo() {
    this.todo?.push({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo = "";
  }

}
