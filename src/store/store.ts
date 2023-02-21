import { makeAutoObservable, runInAction } from "mobx";
import { getDataReq } from "@src/api/game";
import { List } from "@src/types/api";

export class MobxStore {
  count = 0;
  data: List = [];

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.count += 1;
  }

  async getData() {
    const { data } = await getDataReq();
    runInAction(() => {
      this.data = data;
    });
  }
}

const store = new MobxStore();

export default store;
