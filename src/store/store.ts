import { makeAutoObservable } from "mobx";

class MobxStore {
  data = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.data += 1;
  }
}

const store = new MobxStore();

export default store;
