import React from "react";
import { createNavBar, NavBarContext } from "@/components/NavBar/NavBarContext";
import BoundaryCatch from '../HOC/error-boundary'
import BaseMain from "@/layout/baseMain/baseMain";
import BaseContent from "@/layout/baseContent/baseContent";
import NavBar from "@/components/NavBar/NavBar";


export function $baseLayoutPageBuilder(Page: React.JSXElementConstructor<any>) {

  @BoundaryCatch
  class BaseLayout extends React.Component<any, any> {
    static contextType = NavBarContext

    context: ComponentNavBar.ContextType

    render() {
      return (<BaseMain>
        <NavBar />
        <BaseContent>
          <Page {...this.props} navbar={this.context} />
        </BaseContent>
      </BaseMain>)
    }
  }

  return createNavBar(BaseLayout)
}
