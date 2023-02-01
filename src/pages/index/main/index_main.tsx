import React from "react";
import autobind from "@/HOC/autobind";
import { View, Text } from "@tarojs/components";
import {AppStore} from '@/store/modules/app'
import "./index.less";
import BaseComponent from "@/base/BaseComponent";


 @autobind('AppStore')
export default class Index extends BaseComponent<{}, PageIndexState, AppStore> {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    // this.props.navbar?.show({
    //   transparent: true,
    //   renderLeft: () => <IndexStatusBar />
    // })
  }

  store: AppStore;

  state = {
    counter: 0,
  };


  render()  {
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
