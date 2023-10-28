//

import {
  ChangeEvent,
  ReactElement,
  ReactNode,
  useCallback
} from "react";
import {
  create
} from "/source/component/create";
import {aria} from "/source/util/data";


const Radio = create(
  require("./radio.scss"), "Radio",
  function ({
    checked,
    name,
    value,
    onSet,
    children
  }: {
    checked?: boolean,
    name?: string,
    value?: string,
    onSet?: (checked: boolean) => void,
    children?: ReactNode
  }): ReactElement {

    const handleChange = useCallback(function (event: ChangeEvent<HTMLInputElement>) {
      const checked = event.target.checked;
      onSet?.(checked);
    }, [onSet]);

    const node = (
      <label styleName="root">
        <div styleName="container">
          <input
            styleName="original"
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={handleChange}
          />
          <div styleName="input" {...aria({hidden: true})}>
            <div styleName="icon"/>
          </div>
        </div>
        {children}
      </label>
    );
    return node;

  }
);


export default Radio;