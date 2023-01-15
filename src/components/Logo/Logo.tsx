import React from 'react'
import './Logo.less'
import {Image, View} from "@tarojs/components";
import img from '@/assets/images/logo.png'
import {def} from "@/utils/is";

export default class Logo extends React.Component<ComponentLogo.LogoProps> {
  get wrapperStyle() {
    const isDef = def(this.props.width) || def(this.props.height)
    if (isDef) {
      return {
        width: `${this.props.width}rpx` || 'auto',
        height: `${this.props.height}rpx` || 'auto'
      }
    }
    return {}
  }

  get wrapperBorderStyle() {
    if (this.props.border) {
      return {
        borderWidth: this.props.borderWidth || 1,
        borderColor: this.props.borderColor || '#fff',
        borderStyle: 'solid'
      }
    }
    return {}
  }

  render() {
    return (
      <View className={'logo-wrapper'} style={{
        ...this.wrapperStyle,
        ...this.wrapperBorderStyle,
        ...{
          borderRadius: this.props.round ? '50%' : '0',
        },
      }}>
        <Image src={img} mode={'aspectFit'} className={'logo-image'} />
      </View>
    );
  }
}
