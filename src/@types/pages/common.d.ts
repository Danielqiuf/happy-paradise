declare interface BaseProps<InnerProps extends AMap = AMap> {
  navbar?: ComponentNavBar.ContextType
  style?: React.CSSProperties
}

declare type InjectProps<Props = {}, Store = {}> = BaseProps<Props> & Store
