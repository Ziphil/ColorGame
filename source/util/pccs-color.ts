//

import {
  ElementOf
} from "ts-essentials";
import {
  createColors
} from "/source/util/color";
import {
  ColorQuiz,
  generateColorQuiz
} from "/source/util/color-quiz";
import {
  pick
} from "/source/util/misc";


export const PCCS_COLORS = createColors([
  {name: "v2", tone: "v", hue: 2, munsell: "4R 4.5/14"},
  {name: "v4", tone: "v", hue: 4, munsell: "10R 5.5/14"},
  {name: "v6", tone: "v", hue: 6, munsell: "8YR 7/13"},
  {name: "v8", tone: "v", hue: 8, munsell: "5Y 8/13"},
  {name: "v10", tone: "v", hue: 10, munsell: "3GY 7/12"},
  {name: "v12", tone: "v", hue: 12, munsell: "3G 5.5/11"},
  {name: "v14", tone: "v", hue: 14, munsell: "5BG 4.5/10"},
  {name: "v16", tone: "v", hue: 16, munsell: "5B 4/10"},
  {name: "v18", tone: "v", hue: 18, munsell: "3PB 3.5/11.5"},
  {name: "v20", tone: "v", hue: 20, munsell: "9PB 3.5/11.5"},
  {name: "v22", tone: "v", hue: 22, munsell: "7P 3.5/11.5"},
  {name: "v24", tone: "v", hue: 24, munsell: "6RP 4/12.5"},
  {name: "b2", tone: "b", hue: 2, munsell: "4R 6/12"},
  {name: "b4", tone: "b", hue: 4, munsell: "10R 6.5/11.5"},
  {name: "b6", tone: "b", hue: 6, munsell: "8YR 7.5/11.5"},
  {name: "b8", tone: "b", hue: 8, munsell: "5Y 8.5/11"},
  {name: "b10", tone: "b", hue: 10, munsell: "3GY 7.5/10"},
  {name: "b12", tone: "b", hue: 12, munsell: "3G 6.5/9"},
  {name: "b14", tone: "b", hue: 14, munsell: "5BG 6/8.5"},
  {name: "b16", tone: "b", hue: 16, munsell: "5B 5.5/8.5"},
  {name: "b18", tone: "b", hue: 18, munsell: "3PB 5/10"},
  {name: "b20", tone: "b", hue: 20, munsell: "9PB 5/10"},
  {name: "b22", tone: "b", hue: 22, munsell: "7P 5/10"},
  {name: "b24", tone: "b", hue: 24, munsell: "6RP 5.5/10.5"},
  {name: "s2", tone: "s", hue: 2, munsell: "4R 4.5/12"},
  {name: "s4", tone: "s", hue: 4, munsell: "10R 5/11.5"},
  {name: "s6", tone: "s", hue: 6, munsell: "8YR 6.5/11.5"},
  {name: "s8", tone: "s", hue: 8, munsell: "5Y 7.5/11"},
  {name: "s10", tone: "s", hue: 10, munsell: "3GY 6.5/10"},
  {name: "s12", tone: "s", hue: 12, munsell: "3G 5/9"},
  {name: "s14", tone: "s", hue: 14, munsell: "5BG 4.5/8.5"},
  {name: "s16", tone: "s", hue: 16, munsell: "5B 4/8.5"},
  {name: "s18", tone: "s", hue: 18, munsell: "3PB 3.5/10"},
  {name: "s20", tone: "s", hue: 20, munsell: "9PB 3.5/10"},
  {name: "s22", tone: "s", hue: 22, munsell: "7P 3.5/10"},
  {name: "s24", tone: "s", hue: 24, munsell: "6RP 4/10.5"},
  {name: "dp2", tone: "dp", hue: 2, munsell: "4R 3.5/11.5"},
  {name: "dp4", tone: "dp", hue: 4, munsell: "10R 4/11"},
  {name: "dp6", tone: "dp", hue: 6, munsell: "8YR 5/11"},
  {name: "dp8", tone: "dp", hue: 8, munsell: "5Y 6/10.5"},
  {name: "dp10", tone: "dp", hue: 10, munsell: "3GY 5/9.5"},
  {name: "dp12", tone: "dp", hue: 12, munsell: "3G 4/8"},
  {name: "dp14", tone: "dp", hue: 14, munsell: "5BG 3.5/8"},
  {name: "dp16", tone: "dp", hue: 16, munsell: "5B 3/8"},
  {name: "dp18", tone: "dp", hue: 18, munsell: "3PB 2.5/9.5"},
  {name: "dp20", tone: "dp", hue: 20, munsell: "9PB 2.5/9.5"},
  {name: "dp22", tone: "dp", hue: 22, munsell: "7P 2.5/9.5"},
  {name: "dp24", tone: "dp", hue: 24, munsell: "6RP 3/10"},
  {name: "lt2+", tone: "lt+", hue: 2, munsell: "4R 7/8"},
  {name: "lt4+", tone: "lt+", hue: 4, munsell: "10R 7.5/8"},
  {name: "lt6+", tone: "lt+", hue: 6, munsell: "8YR 8/8"},
  {name: "lt8+", tone: "lt+", hue: 8, munsell: "5Y 8.5/7.5"},
  {name: "lt10+", tone: "lt+", hue: 10, munsell: "3GY 8/7"},
  {name: "lt12+", tone: "lt+", hue: 12, munsell: "3G 7.5/6"},
  {name: "lt14+", tone: "lt+", hue: 14, munsell: "5BG 7/6"},
  {name: "lt16+", tone: "lt+", hue: 16, munsell: "5B 6.5/6"},
  {name: "lt18+", tone: "lt+", hue: 18, munsell: "3PB 6/7"},
  {name: "lt20+", tone: "lt+", hue: 20, munsell: "9PB 6/7"},
  {name: "lt22+", tone: "lt+", hue: 22, munsell: "7P 6/7"},
  {name: "lt24+", tone: "lt+", hue: 24, munsell: "6RP 6.5/7.5"},
  {name: "sf2", tone: "sf", hue: 2, munsell: "4R 6/6.5"},
  {name: "sf4", tone: "sf", hue: 4, munsell: "10R 6.5/6.5"},
  {name: "sf6", tone: "sf", hue: 6, munsell: "8YR 7/6.5"},
  {name: "sf8", tone: "sf", hue: 8, munsell: "5Y 7.5/6"},
  {name: "sf10", tone: "sf", hue: 10, munsell: "3GY 7/5.5"},
  {name: "sf12", tone: "sf", hue: 12, munsell: "3G 6.5/5"},
  {name: "sf14", tone: "sf", hue: 14, munsell: "5BG 6/5"},
  {name: "sf16", tone: "sf", hue: 16, munsell: "5B 5.5/5"},
  {name: "sf18", tone: "sf", hue: 18, munsell: "3PB 5/5.5"},
  {name: "sf20", tone: "sf", hue: 20, munsell: "9PB 5/5.5"},
  {name: "sf22", tone: "sf", hue: 22, munsell: "7P 5/5.5"},
  {name: "sf24", tone: "sf", hue: 24, munsell: "6RP 5.5/6"},
  {name: "d2", tone: "d", hue: 2, munsell: "4R 4.5/6.5"},
  {name: "d4", tone: "d", hue: 4, munsell: "10R 5/6.5"},
  {name: "d6", tone: "d", hue: 6, munsell: "8YR 5.5/6.5"},
  {name: "d8", tone: "d", hue: 8, munsell: "5Y 6/6"},
  {name: "d10", tone: "d", hue: 10, munsell: "3GY 5.5/5.5"},
  {name: "d12", tone: "d", hue: 12, munsell: "3G 5/5"},
  {name: "d14", tone: "d", hue: 14, munsell: "5BG 4.5/5"},
  {name: "d16", tone: "d", hue: 16, munsell: "5B 4/5"},
  {name: "d18", tone: "d", hue: 18, munsell: "3PB 3.5/5.5"},
  {name: "d20", tone: "d", hue: 20, munsell: "9PB 3.5/5.5"},
  {name: "d22", tone: "d", hue: 22, munsell: "7P 3.5/5.5"},
  {name: "d24", tone: "d", hue: 24, munsell: "6RP 4/6"},
  {name: "dk2", tone: "dk", hue: 2, munsell: "4R 2.5/6"},
  {name: "dk4", tone: "dk", hue: 4, munsell: "10R 3/6"},
  {name: "dk6", tone: "dk", hue: 6, munsell: "8YR 3.5/6"},
  {name: "dk8", tone: "dk", hue: 8, munsell: "5Y 4/5.5"},
  {name: "dk10", tone: "dk", hue: 10, munsell: "3GY 3.5/5"},
  {name: "dk12", tone: "dk", hue: 12, munsell: "3G 3/4.5"},
  {name: "dk14", tone: "dk", hue: 14, munsell: "5BG 2.5/4.5"},
  {name: "dk16", tone: "dk", hue: 16, munsell: "5B 2.5/4.5"},
  {name: "dk18", tone: "dk", hue: 18, munsell: "3PB 2/5"},
  {name: "dk20", tone: "dk", hue: 20, munsell: "9PB 2/5"},
  {name: "dk22", tone: "dk", hue: 22, munsell: "7P 2/5"},
  {name: "dk24", tone: "dk", hue: 24, munsell: "6RP 2.5/5.5"},
  {name: "p2+", tone: "p+", hue: 2, munsell: "4R 8/3.5"},
  {name: "p4+", tone: "p+", hue: 4, munsell: "10R 8/3.5"},
  {name: "p6+", tone: "p+", hue: 6, munsell: "8YR 8.5/3.5"},
  {name: "p8+", tone: "p+", hue: 8, munsell: "5Y 9/3"},
  {name: "p10+", tone: "p+", hue: 10, munsell: "3GY 8.5/3"},
  {name: "p12+", tone: "p+", hue: 12, munsell: "3G 8/3"},
  {name: "p14+", tone: "p+", hue: 14, munsell: "5BG 8/3"},
  {name: "p16+", tone: "p+", hue: 16, munsell: "5B 8/3"},
  {name: "p18+", tone: "p+", hue: 18, munsell: "3PB 7.5/3"},
  {name: "p20+", tone: "p+", hue: 20, munsell: "9PB 7.5/3"},
  {name: "p22+", tone: "p+", hue: 22, munsell: "7P 7.5/3"},
  {name: "p24+", tone: "p+", hue: 24, munsell: "6RP 8/3"},
  {name: "ltg2", tone: "ltg", hue: 2, munsell: "4R 7/2"},
  {name: "ltg4", tone: "ltg", hue: 4, munsell: "10R 7/2"},
  {name: "ltg6", tone: "ltg", hue: 6, munsell: "8YR 7.5/2"},
  {name: "ltg8", tone: "ltg", hue: 8, munsell: "5Y 7.5/2"},
  {name: "ltg10", tone: "ltg", hue: 10, munsell: "3GY 7.5/2"},
  {name: "ltg12", tone: "ltg", hue: 12, munsell: "3G 7/2"},
  {name: "ltg14", tone: "ltg", hue: 14, munsell: "5BG 7/2"},
  {name: "ltg16", tone: "ltg", hue: 16, munsell: "5B 7/2"},
  {name: "ltg18", tone: "ltg", hue: 18, munsell: "3PB 6.5/2"},
  {name: "ltg20", tone: "ltg", hue: 20, munsell: "9PB 6.5/2"},
  {name: "ltg22", tone: "ltg", hue: 22, munsell: "7P 6.5/2"},
  {name: "ltg24", tone: "ltg", hue: 24, munsell: "6RP 7/2"},
  {name: "g2", tone: "g", hue: 2, munsell: "4R 4/2"},
  {name: "g4", tone: "g", hue: 4, munsell: "10R 4/2"},
  {name: "g6", tone: "g", hue: 6, munsell: "8YR 4.5/2"},
  {name: "g8", tone: "g", hue: 8, munsell: "5Y 4.5/2"},
  {name: "g10", tone: "g", hue: 10, munsell: "3GY 4.5/2"},
  {name: "g12", tone: "g", hue: 12, munsell: "3G 4/2"},
  {name: "g14", tone: "g", hue: 14, munsell: "5BG 4/2"},
  {name: "g16", tone: "g", hue: 16, munsell: "5B 4/2"},
  {name: "g18", tone: "g", hue: 18, munsell: "3PB 3.5/2"},
  {name: "g20", tone: "g", hue: 20, munsell: "9PB 3.5/2"},
  {name: "g22", tone: "g", hue: 22, munsell: "7P 3.5/2"},
  {name: "g24", tone: "g", hue: 24, munsell: "6RP 4/2"},
  {name: "dkg2", tone: "dkg", hue: 2, munsell: "4R 2/1.5"},
  {name: "dkg4", tone: "dkg", hue: 4, munsell: "10R 2/1.5"},
  {name: "dkg6", tone: "dkg", hue: 6, munsell: "8YR 2.5/1.5"},
  {name: "dkg8", tone: "dkg", hue: 8, munsell: "5Y 2.5/1.5"},
  {name: "dkg10", tone: "dkg", hue: 10, munsell: "3GY 2.5/1.5"},
  {name: "dkg12", tone: "dkg", hue: 12, munsell: "3G 2/1.5"},
  {name: "dkg14", tone: "dkg", hue: 14, munsell: "5BG 2/1.5"},
  {name: "dkg16", tone: "dkg", hue: 16, munsell: "5B 2/1.5"},
  {name: "dkg18", tone: "dkg", hue: 18, munsell: "3PB 1.5/1.5"},
  {name: "dkg20", tone: "dkg", hue: 20, munsell: "9PB 1.5/1.5"},
  {name: "dkg22", tone: "dkg", hue: 22, munsell: "7P 1.5/1.5"},
  {name: "dkg24", tone: "dkg", hue: 24, munsell: "6RP 2/1.5"}
]);

export function createPccsColorQuiz(type: "random" | "sameTone" | "sameHue"): ColorQuiz<PccsColor> {
  const colors = PCCS_COLORS;
  const targetColor = colors[Math.floor(Math.random() * colors.length)];
  const wrongColors = generateWrongColors(colors, targetColor, type);
  const quiz = generateColorQuiz(targetColor, wrongColors);
  return quiz;
}

function generateWrongColors(colors: Array<PccsColor>, targetColor: PccsColor, type: "random" | "sameTone" | "sameHue") {
  const otherColors = colors.filter((color) => color !== targetColor);
  const wrongColors = [];
  if (type === "random") {
    wrongColors.push(...pick(otherColors, 3));
  } else if (type === "sameTone") {
    const wrongSimilarColors = otherColors.filter((color) => color.tone === targetColor.tone);
    wrongColors.push(...pick(wrongSimilarColors, 3));
  } else {
    const wrongSimilarColors = otherColors.filter((color) => color.hue === targetColor.hue);
    wrongColors.push(...pick(wrongSimilarColors, 3));
  }
  return wrongColors;
}

export type PccsColor = ElementOf<typeof PCCS_COLORS>;