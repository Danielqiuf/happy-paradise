import React from "react";
import {View,Text} from "@tarojs/components";
import {getMenuWholeInfo, mergeStyle} from "@/utils/tool";
import './NavBar.less'
import {absoluteTopLeft} from "@/constants/style";
import { NavBarContext } from "@/components/NavBar/NavBarContext";


export default class NavBar extends React.Component {
  static contextType = NavBarContext;

  context: ComponentNavBar.ContextType

  constructor(props) {
    super(props);
  }


  async componentDidMount() {
    try {
      await this.getMenuSize()
    } catch(e) {
      //
    }
  }

  async getMenuSize() {
    const menuSizeInfo = await getMenuWholeInfo()
    this.context.setFields({
      navbarHeight: menuSizeInfo.menuHeight,
      statusBarHeight: menuSizeInfo.statusBarHeight,
      navbarFullHeight: menuSizeInfo.menuHeight + menuSizeInfo.statusBarHeight
    })
  }

  get navBarContentStyle() {
    if (this.context.transparent) {
      return {
        ...absoluteTopLeft
      }
    }
    return {}
  }

  get navBarRect() {
    return {
      height: `${this.context.navbarHeight}px`,
      paddingTop: `${this.context.statusBarHeight}px`
    }
  }

  render() {
    const { renderLeft, title } = this.context
    return <View className='navbar-wrapper' style={mergeStyle(
      this.navBarRect,
      this.navBarContentStyle
    )}
    >
      <View className='navbar-content'>
        <View className={'navbar-left'}>
          {renderLeft?.()}
        </View>
        {title ? (<Text className={'navbar-title'}>{title}</Text>) : null}
      </View>
    </View>
  }
}


