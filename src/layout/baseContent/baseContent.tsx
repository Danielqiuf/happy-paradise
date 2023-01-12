import React from 'react'
import {View} from "@tarojs/components";
import './baseContent.less'

export default class BaseContent extends React.Component {
  render() {
    return (
      <View className={'base-content'}>
        {this.props.children}
      </View>
    )
  }
}
