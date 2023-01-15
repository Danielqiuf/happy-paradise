import Taro from '@tarojs/taro'

export class BaseNavigation{
  constructor() {
  }

  private getUrl(option: BaseNavigation.Option): string {
    if (option.name === undefined) {
      throw new Error('navigation to options in name is not undefined!!')
    }
    const url = `/${option.package ?? 'pages'}/${option.name}/${option.index ?? option.name}`
    return url
  }

  get currentUrl() {
    const pages = Taro.getCurrentPages()
    const currentPage = pages[pages.length - 1]
    return currentPage ? currentPage.route : ''
  }

  get currentName() {
    return this.currentUrl.match(/.*\/(.*)$/)?.[1] || ''
  }

  get currentPackage() {
    return this.currentUrl.split('/')[1]
  }

  async to(option: BaseNavigation.Option, callback?: Fn) {
    const url = this.getUrl(option)
    return await Taro.navigateTo({
      url,
      events: option.events || {},
    }).then(() => {
      callback?.()
    }).catch((reason) => {
      throw new Error(reason)
    })
  }

  async redirect(option: Omit<BaseNavigation.Option, 'events'>, callback?: Fn) {
    const url = this.getUrl(option)
    return await Taro.redirectTo({
      url,
    }).then(() => {
      callback?.()
    }).catch((reason) => {
      throw new Error(reason)
    })
  }

  async back(option: BaseNavigation.BackOption, callback?: Fn) {
    return await Taro.navigateBack({
      delta: option.delta || 1
    }).then(() => {
      callback?.()
    }).catch((reason) => {
      throw new Error(reason)
    })
  }

  launch(option: BaseNavigation.BaseOption, callback?: Fn) {
    const url = this.getUrl(option);
    return Taro.reLaunch({
      url
    }).then(() => {
      callback?.()
    }).catch((reason) => {
      throw new Error(reason)
    })
  }

  tab(option: BaseNavigation.BaseOption, callback?: Fn) {
    const url = this.getUrl(option);
    return Taro.switchTab({url}).then(() => {
      callback?.()
    }).catch((reason) => {
      throw new Error(reason)
    })
  }
}

export default (new BaseNavigation())
