//

import {
  MouseEvent,
  ReactElement,
  ReactNode
} from "react";
import {
  create
} from "/source/component/create";


const Button = create(
  require("./button.scss"), "Button",
  function ({
    onClick,
    children
  }: {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void,
    children: ReactNode
  }): ReactElement {

    const node = (
      <button styleName="root" type="button" onClick={onClick}>
        {children}
      </button>
    );
    return node;

  }
);


export default Button;