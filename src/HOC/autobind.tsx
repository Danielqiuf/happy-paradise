import { observer, inject } from 'mobx-react'

export default (module: string) => {
  return function (WrappedComponent: IReactComponent): any {
    return inject(module)(observer(WrappedComponent))
  }
}
