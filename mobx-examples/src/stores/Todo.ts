import { action, observable } from "mobx";

export class TodoStore {
  @observable
  todo = [];

  @action
  addTodo(todo) {
    this.todo = [
      ...this.todo,
      todo
    ];
  }

  @action
  delTodo(id: number) {
    this.todo = [
      ...this.todo.slice(0, id),
      ...this.todo.slice(id + 1, this.todo.length)
    ];
  }
}