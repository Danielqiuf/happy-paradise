import React from "react";
import autobind from "@/HOC/autobind";
import { View, Text } from "@tarojs/components";
import {AppStore} from '@/store/modules/app'
import "./index.less";
import Logo from "@/components/Logo/Logo";


@autobind('AppStore')
export default class Index extends React.Component<BaseProps<{}>, PageIndexState, BaseAppStoreProp<AppStore>> {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    this.props.navbar?.show({
      transparent: true,
      renderLeft: () => (
        <View className={'left-wrapper'}>
          <Logo width={40} height={40} />
          <Text className={'left-wrapper-title'}>创意人生栈</Text>
        </View>
      )
    })
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
