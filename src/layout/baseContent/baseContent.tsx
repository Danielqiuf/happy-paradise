import React from 'react'
import {View} from "@tarojs/components";
import './baseContent.less'
import {NavBarContext} from "@/components/NavBar/NavBarContext";
import {mergeStyle} from "@/utils/tool";

export default class BaseContent extends React.Component<BaseProps> {
  static contextType = NavBarContext

  context: ComponentNavBar.ContextType

  get contentStyle() {
    return this.context.transparent ? {
      paddingTop: `${this.context.navbarFullHeight}px`
    } : {}
  }

  render() {
    return (
      <View className={'base-content'} style={mergeStyle(
        this.contentStyle,
        this.props.style || {}
      )}>
        {this.props.children}
      </View>
    )
  }
}
