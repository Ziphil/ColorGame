//

import {
  munsellToHex,
  munsellToMhvc
} from "munsell";


export function createColors<A>(minimalColors: Array<MinimalColor & A>): Array<Color & A> {
  const colors = minimalColors.map((color) => {
    if (color.name && color.munsell) {
      const munsell = color.munsell;
      return {
        ...color,
        mhvs: munsellToMhvc(munsell),
        hex: munsellToHex(munsell).toUpperCase()
      };
    } else {
      return null;
    }
  }).filter(isValidColor) as Array<Color & A>;
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
  mhvs: [hue: number, value: number, chroma: number],
  hex: string
};