import React from "react";
import autobind from "@/HOC/autobind";
import { View, Text } from "@tarojs/components";
import {AppStore} from '@/store/modules/app'
import BaseComponent from "@/base/BaseComponent";
import "./index.less";
import Logo from "@/components/Logo/Logo";


@autobind('AppStore')
export default class Index extends BaseComponent<{}, PageIndexState, BaseAppStoreProp<AppStore>> {
  constructor(props) {
    super(props, {
      navbar: {
        transparent: true,
        renderLeft: () => (
          <View className={'left-wrapper'}>
            <Logo width={40} height={40} />
            <Text className={'left-wrapper-title'}>创意人生栈</Text>
          </View>
        )
      },
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
    // if (this.state.counter === 2) {
    //   // 模拟 JS 报错
    //   throw new Error("I crashed!");
    // }
    // const { state } = this.store

    return (
      <View className="index">
        <Text>这是Page Index的内容！！</Text>
      </View>
    );
  }
}
