import React from 'react'
import BaseComponent from "@/base/BaseComponent";
import Logo from "@/components/Logo/Logo";
import PersonIcon from '@/assets/images/person-icon-circle.png'
import {Text, View, Image} from "@tarojs/components";

export default class IndexStatusBar extends BaseComponent {

  render() {
    return <View className={'index-status-bar'}>
      <View className={'left-wrapper'}>
        <Logo width={56} height={56} round border />
        <Text className={'left-wrapper-title'}>{
          this.config.take('projectName')
        }</Text>
        <Image src={PersonIcon} className={'left-wrapper-person'} />
      </View>
    </View>
  }
}
