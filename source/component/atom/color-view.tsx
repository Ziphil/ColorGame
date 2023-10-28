/* eslint-disable no-useless-computed-key */

import {
  faO,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import qixColor from "color";
import {
  MouseEvent,
  ReactElement
} from "react";
import {
  create
} from "/source/component/create";
import {
  Color
} from "/source/util/color";
import {
  data
} from "/source/util/data";


const ColorView = create(
  require("./color-view.scss"), "ColorView",
  function ({
    color,
    correct = null,
    showInfo,
    pop = false,
    onClick
  }: {
    color: Color,
    correct?: boolean | null,
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
          <div styleName="info">
            <div styleName="name">{color.name}</div>
            <div styleName="value-list">
              <div styleName="value">{color.munsell}</div>
              <div styleName="value">{color.hex}</div>
            </div>
          </div>
        )}
        {correct !== null && (
          <div styleName="mark">
            <FontAwesomeIcon styleName="mark-icon" icon={correct ? faO : faTimes}/>
          </div>
        )}
      </button>
    );
    return node;

  }
);


export default ColorView;