declare namespace BaseNavigation {
  export interface Option extends BaseOption {
    index?: string
    package?: string
    events?: AMap
  }

  export interface BackOption {
    delta?: number
  }

  export interface BaseOption {
    name: string
  }
}
