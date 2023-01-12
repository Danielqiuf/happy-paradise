import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import stores from './store'
import './app.less'

export default class App extends Component {


  componentDidShow() {
  }

  componentDidHide() {
  }

  // this.props.children 是将要会渲染的页面
  render() {
    return (
      <Provider {...stores}>
        {this.props.children}
      </Provider>
    )
  }
}
