declare type BaseComponentProps<P, StoreProps> = P & StorePropsBase<StoreProps>

declare interface BaseComponentHooks {
  mounted?(): void;
  willMount?(): void;
  willUnMount?(): void;
  willUpdate?(...args: HooksWillUpdate<any, any>): void;
  updated?(): void;
  ui?(): React.ReactNode | void;
}

declare interface BaseComponentConfiguration {
  navbar?: ComponentNavBar.NavBarConfiguration
}
