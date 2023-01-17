import { Injectable } from '@angular/core';
import { Todo } from './todo.model'

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private list: Todo[] = [];
  constructor() { }

  // 新增待辦事項
  add(title: string): void {
    if(title || title.trim()) {
      this.list.push(new Todo(title))
    }
  }

  // 取得待辦事項清單
  getList(): Todo[] {
    return this.list;
  }

  // 移除待辦事項
  remove(index: number): void {
    this.list.splice(index, 1)
  }
}
