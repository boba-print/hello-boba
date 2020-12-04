import { action, observable } from "mobx";

export class CounterStore {
  @observable
  cnt: number = 0;

  @action
  increase() {
    this.cnt += 1;
  }

  @action
  decrease() {
    this.cnt -= 1;
  }
}