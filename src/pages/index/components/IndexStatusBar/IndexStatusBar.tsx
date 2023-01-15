import React from 'react'
import BaseComponent from "@/base/BaseComponent";
import Logo from "@/components/Logo/Logo";
import {Text, View} from "@tarojs/components";

export default class IndexStatusBar extends BaseComponent {

  render() {
    return <View className={'left-wrapper'}>
      <Logo width={56} height={56} round border />
      <Text className={'left-wrapper-title'}>{
        this.config.take('projectName')
      }</Text>
    </View>;
  }
}
