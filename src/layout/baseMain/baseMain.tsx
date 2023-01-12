import React from 'react'
import {View} from "@tarojs/components";
import './baseMain.less'

export default class BaseMain extends React.Component {
  render() {
    return (
      <View className={'base-main'}>
        <View className={'base-main-inner'}>
          {this.props.children}
        </View>
      </View>
    );
  }
}
