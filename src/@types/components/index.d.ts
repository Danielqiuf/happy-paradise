declare namespace ComponentNavBar {

  export interface NavBarState {
    navbarHeight: number
    statusBarHeight: number
    navbarFullHeight: number
    visible: boolean
    title: string
    transparent: boolean
    renderLeft: Fn<any, React.ReactNode> | null
  }


  export interface ContextType extends NavBarState, ContextTypeAction {

  }

  export interface ContextTypeAction {
    show(fields?: Partial<NavBarState>): void
    setFields(fields?: Partial<NavBarState>): void
  }

}

declare namespace ComponentLogo {
  export interface LogoProps {
    width?: number
    height?: number
  }
}
