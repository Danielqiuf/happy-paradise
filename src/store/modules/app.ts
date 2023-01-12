import {makeObservable, action, observable, computed} from "mobx";
import {BaseStore} from "@/base/BaseStore";

export class AppStore extends BaseStore implements AppStoreProp {
  constructor() {
    super()
    makeObservable(this, {
      loginState: observable,
      appLogin: action,
      state: computed
    })
  }

  getName() {
    return 'AppStore';
  }

  loginState = 1

  appLogin(state: number) {
    this.loginState = state
  }

  get state() {
    return this.loginState
  }
}

export default (new AppStore())


