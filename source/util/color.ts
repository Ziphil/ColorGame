//

import {
  munsellToHex,
  munsellToMhvc
} from "munsell";


export function createColors(minimalColors: Array<MinimalColor>): Array<Color> {
  const colors = minimalColors.map((color) => {
    if (color.name && color.munsell) {
      const munsell = color.munsell;
      const munsellHue = munsellToMhvc(munsell)[0];
      const hex = munsellToHex(munsell).toUpperCase();
      return {
        name: color.name,
        munsell: color.munsell,
        munsellHue,
        hex
      };
    } else {
      return null;
    }
  }).filter(isValidColor);
  return colors;
}

function isValidColor(color: Color | null): color is Color {
  return color !== null;
}

type MinimalColor = {
  name: string,
  munsell: string
};
export type Color = {
  name: string,
  munsell: string,
  munsellHue: number,
  hex: string
};