declare namespace ComponentNavBar {
  export interface NavBarConfiguration {
    transparent?: boolean
  }

  export interface NavBarProps extends NavBarConfiguration {

  }

  export interface NavBarState {
    navbarHeight: number
    statusBarHeight: number
  }
}
