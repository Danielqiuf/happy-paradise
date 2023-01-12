declare namespace ComponentNavBar {
  export interface NavBarProps {
    transparent?: boolean
    title?: string
    renderLeft?: Fn<any, React.ReactNode>
  }

  export interface NavBarState {
    navbarHeight: number
    statusBarHeight: number
  }
}

declare namespace ComponentLogo {
  export interface LogoProps {
    width?: number
    height?: number
  }
}
