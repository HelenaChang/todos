import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
  }

  // 新增待辦事項
    addTodo(event: KeyboardEvent): void {
      const todoThing = event.target as HTMLInputElement;
      if (!todoThing)
      {
      return;
      }
      if (event.key === 'Enter')
      {
      const todo = todoThing.value.trim();
      console.log(todo)
      this.todoListService.add(todo);
      todoThing.value='';
      }
    }

    // 取得待辦事項清單
    getList(): Todo[] {
      return this.todoListService.getList();
    }

    // 移除待辦事項
    remove(index: number): void {
      this.todoListService.remove(index)
    }

}
