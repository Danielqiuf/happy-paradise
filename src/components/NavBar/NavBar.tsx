import React from "react";
import {View,Text} from "@tarojs/components";
import {getMenuWholeInfo} from "@/utils/tool";
import './NavBar.less'

export default class NavBar extends React.Component<ComponentNavBar.NavBarProps, ComponentNavBar.NavBarState> {
  constructor(props) {
    super(props);
    this.calcMenuSize()
  }

  state = {
    navbarHeight: 0,
    statusBarHeight: 0
  }

  async calcMenuSize() {
    const menuSizeInfo = await getMenuWholeInfo()
    this.setState({
      navbarHeight: menuSizeInfo.fullHeight,
      statusBarHeight: menuSizeInfo.statusBarHeight
    })
  }

  render() {
    const { navbarHeight, statusBarHeight } = this.state

    return <View className='navbar-wrapper' style={{
      height: navbarHeight + 'px',
      paddingTop: statusBarHeight + 'px'
    }}
    >
      <View className='navbar-content'>
        <Text>首页</Text>
      </View>
      {this.props.children}
    </View>
  }
}
