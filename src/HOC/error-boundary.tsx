import React from 'react'
import {Text, View} from "@tarojs/components";

export default (WrappedPage: React.JSXElementConstructor<any>): any => {
  return class extends React.Component<any, any> {
    el = React.createRef<any>()

    state = {
      error: false
    }

    static getDerivedStateFromError() {
      return {
        error: true
      }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      console.log('catch, =====>', error, errorInfo)
    }

    componentDidShow () {
      this.el.current?.componentDidShow?.()
    }

    componentDidHide () {
      this.el.current?.componentDidShow?.()
    }



    render() {
      return this.state.error ? <View>
        <Text>错误！！</Text>
      </View> : <WrappedPage {...this.props} />
    }
  }
}
