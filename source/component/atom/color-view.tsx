/* eslint-disable no-useless-computed-key */

import qixColor from "color";
import {
  MouseEvent,
  ReactElement
} from "react";
import {
  create
} from "/source/component/create";
import {
  data
} from "/source/util/data";
import {
  Color
} from "/source/util/jis-color";


const ColorView = create(
  require("./color-view.scss"), "ColorView",
  function ({
    color,
    showInfo,
    pop = false,
    onClick
  }: {
    color: Color,
    showInfo: boolean,
    pop?: boolean,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  }): ReactElement {

    const light = qixColor(color.hex).isLight();

    const style = {
      ["--color"]: qixColor(color.hex).toString(),
      ["--focus-color"]: qixColor(color.hex).alpha(0.5).toString()
    } as any;
    const node = (
      <button styleName="root" onClick={onClick} disabled={onClick === undefined} style={style} {...data({light, pop})}>
        {showInfo && (
          <>
            <div styleName="name">{color.name}</div>
            <div styleName="value-list">
              <div styleName="value">{color.munsell}</div>
              <div styleName="value">{color.hex}</div>
            </div>
          </>
        )}
      </button>
    );
    return node;

  }
);


export default ColorView;