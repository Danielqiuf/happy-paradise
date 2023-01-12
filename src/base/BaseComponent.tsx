import React from 'react'
import NavBar from "@/components/NavBar/NavBar";
import * as Is from "@/utils/is";

export default class BaseComponent<
    Props extends AMap = AMap,
    State extends AMap = AMap,
    StoreProp extends AMap = AMap
  >
  extends React.Component<
    BaseComponentProps<Props, StoreProp>,
    State,
    any
  > implements BaseComponentHooks {
  constructor(props, config?: BaseComponentConfiguration) {
    super(props);
    this.is = Object.assign({}, Is, {})
    if (config) {
      this.navbar = config.navbar
    }
  }

  navbar?: ComponentNavBar.NavBarConfiguration

  is?: typeof Is

  mounted?() {}

  ui?() {}

  willMount?() {}

  willUnMount?() {}

  willUpdate? = (...args: HooksWillUpdate<Props, State>) => { console.debug('will update recive arguments is ...', ...args) }

  updated? = () => {}

  UNSAFE_componentWillMount? = () => {
    this.willMount?.()
  }
  UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any) {
    this.willUpdate?.(nextProps, nextState, nextContext)
  }

  componentWillUnmount? = () => {
    this.willUnMount?.()
  }
  componentDidMount? = () => {
    this.mounted?.()
  }

  renderBaseUi() {
    if (this.navbar) {
      return (
        <NavBar>
          {this.ui!() as React.ReactNode}
        </NavBar>
      )
    }
  }

  render() {
    console.error('navbar', this.navbar)
    if (this.ui) {
      return this.renderBaseUi()
    }
    throw new Error('ui lifeCycle hooks is not defined!!')
  }
}
