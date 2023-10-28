//

import {
  Color
} from "/source/util/color";
import {
  pick
} from "/source/util/misc";


export function generateColorQuiz<C extends Color>(targetColor: C, wrongColors: Array<C>): ColorQuiz<C> {
  const correctIndex = Math.floor(Math.random() * 4);
  const choices = [];
  choices.push(...pick(wrongColors, 3).map((color) => ({color, correct: false})));
  choices.splice(correctIndex, 0, {color: targetColor, correct: true});
  return {targetColor, choices};
}

export type ColorQuiz<C extends Color> = {
  targetColor: C,
  choices: Array<ColorQuizChoice<C>>
};
export type ColorQuizChoice<C extends Color> = {
  color: C,
  correct: boolean
};