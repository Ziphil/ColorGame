//

import {
  ReactElement,
  ReactNode
} from "react";
import {
  Link
} from "react-router-dom";
import {
  create
} from "/source/component/create";


const LinkButton = create(
  require("./link-button.scss"), "LinkButton",
  function ({
    to,
    children
  }: {
    to: string,
    children: ReactNode
  }): ReactElement {

    const node = (
      <Link styleName="root" to={to}>
        {children}
      </Link>
    );
    return node;

  }
);


export default LinkButton;