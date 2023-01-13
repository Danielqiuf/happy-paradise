import {IReactComponent} from "mobx-react/dist/types/IReactComponent";
import React from "react";

export const NavBarContext = React.createContext<ComponentNavBar.ContextType | null>(null)

export function createNavBar(WrappedComponent: IReactComponent) {

  return class extends React.Component<AMap, ComponentNavBar.NavBarState> {
    state = {
      navbarHeight: 0,
      statusBarHeight: 0,
      transparent: false,
      visible: false,
      title: '',
      renderLeft: null,
      navbarFullHeight: 0
    }

    show = (state?: Partial<ComponentNavBar.NavBarState>) => {
      const _fields = Object.assign({}, this.state, state || {}) as ComponentNavBar.NavBarState

      this.setState({
        ..._fields,
        visible: true
      })
    }

    setFields = (fields: Partial<ComponentNavBar.NavBarState>) => {
      this.setState((prev) => ({
        ...prev,
        ...(fields || {})
      }))
    }

    render() {
      return (
        <NavBarContext.Provider value={{
          ...this.state,
          show: this.show,
          setFields: this.setFields
        }}>
          <WrappedComponent />
        </NavBarContext.Provider>
      )
    }
  }
}
