import Taro from '@tarojs/taro'
import {CSSProperties} from "react";

export async function getStatusBarHeight() {
  let height = 0
  try {
    const systemInfo = await Taro.getSystemInfo()
    if (systemInfo) {
      height = systemInfo.statusBarHeight
    }
  } catch {
    //
  }
  return height
}

export async function getScreenInfo() {
  let screenInfo = {}
  try {
    const systemInfo = await Taro.getSystemInfo()
    if (systemInfo) {
      screenInfo = {
        screenHeight: systemInfo.screenHeight,
        screenWidth: systemInfo.screenWidth
      }
    }
  } catch {
    //
  }
  return screenInfo
}

export async function getMenuWholeInfo() {
  const statusBarHeight = await getStatusBarHeight()
  const menu = Taro.getMenuButtonBoundingClientRect()
  // console.error('statr', statusBarHeight, menu.height)
  return {
    menuHeight: (menu.top - statusBarHeight) * 2 + menu.height,
    statusBarHeight,
    ...menu
  }
}

export function mergeStyle(...args: CSSProperties[]): CSSProperties | undefined {
  if (args && args.length) {
    const style = Object.create(null)
    args.forEach((sty) => {
      Object.assign(style, sty)
    })
    return Object.freeze(style)
  }
}
