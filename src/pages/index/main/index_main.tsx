import React from "react";
import autobind from "@/HOC/autobind";
import { View, Text, Button } from "@tarojs/components";
import {AppStore} from '@/store/modules/app'
import BaseComponent from "@/base/BaseComponent";
import "./index.less";


@autobind('AppStore')
export default class Index extends BaseComponent<{}, PageIndexState, BaseAppStoreProp<AppStore>> {
  constructor(props) {
    super(props, {
      navbar: {
        transparent: true
      }
    });
    this.mountStore()
  }

  store: AppStore;

  state = {
    counter: 0,
  };

  mountStore() {
    this.store = this.props.AppStore
  }

  mounted() {

  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
    this.store.appLogin(3)
  };

  ui()  {
    if (this.state.counter === 2) {
      // 模拟 JS 报错
      throw new Error("I crashed!");
    }
    const { state } = this.store

    return (
      <View className="index">
        <Text>Hello world!</Text>
        <Button onClick={this.handleClick}>点我</Button>
        <Text>Count: {this.state.counter}</Text>
        <Text>loginState: {state}</Text>
      </View>
    );
  }
}
