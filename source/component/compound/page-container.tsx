//

import {
  ReactElement,
  ReactNode
} from "react";
import {
  create
} from "/source/component/create";


const PageContainer = create(
  require("./page-container.scss"), "PageContainer",
  function ({
    children
  }: {
    children: ReactNode
  }): ReactElement {

    const node = (
      <main styleName="root">
        {children}
      </main>
    );
    return node;

  }
);


export default PageContainer;