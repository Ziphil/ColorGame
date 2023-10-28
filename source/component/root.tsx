//

import {
  ReactElement
} from "react";
import {
  create
} from "/source/component/create";
import JisColorPage from "/source/component/page/jis-color-page";


const Root = create(
  require("./root.scss"), "Root",
  function ({
  }: {
  }): ReactElement | null {

    const node = (
      <JisColorPage/>
    );
    return node;

  }
);


export default Root;