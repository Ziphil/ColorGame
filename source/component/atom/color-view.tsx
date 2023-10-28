/* eslint-disable no-useless-computed-key */

import qixColor from "color";
import {
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
    pop = false
  }: {
    color: Color,
    showInfo: boolean,
    pop?: boolean
  }): ReactElement {

    const light = qixColor(color.hex).isLight();

    const node = (
      <div styleName="root" style={{["--color"]: color.hex} as any} {...data({light, pop})}>
        {showInfo && (
          <>
            <div styleName="name">{color.name}</div>
            <div styleName="value-list">
              <div styleName="value">{color.munsell}</div>
              <div styleName="value">{color.hex}</div>
            </div>
          </>
        )}
      </div>
    );
    return node;

  }
);


export default ColorView;