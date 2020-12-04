import { action, observable } from "mobx";

type TodoType = {
  title: string;
  content: string;
}
export class TodoStore {
  @observable
  todo: TodoType[] = [];

  @action
  addTodo(todo: TodoType) {
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