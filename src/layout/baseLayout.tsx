import React from "react";
import BoundaryCatch from '../HOC/error-boundary'


@BoundaryCatch
class BaseLayout extends React.Component {

  render() {
    return this.props.children
  }
}

export function $baseLayoutPageBuilder(Page: React.JSXElementConstructor<any>) {
  return class extends React.Component<any, any> {
    componentDidMount() {
    }

    render() {
      return <BaseLayout>
        <Page />
      </BaseLayout>
    }
  }
}
