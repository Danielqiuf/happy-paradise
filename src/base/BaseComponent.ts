import {Component} from 'react'
import Navigation, {BaseNavigation} from "@/base/BaseNavigation";
import Config, {BaseConfig} from "@/base/BaseConfig";

/** 基类 */
export default class BaseComponent<
  Props extends AMap = AMap,
  State extends AMap = AMap,
  Store = {},
  SS = any
  > extends Component<InjectProps<BaseProps<Props>, BaseAppStoreProp<Store>>, State, SS>
{

  navigation: BaseNavigation  // 这里挂载公共导航的方法

  config: BaseConfig // 这里挂载操作与读取配置的基类

  constructor(props) {
    super(props);
    this.navigation = Navigation
    this.config = Config
  }

}
