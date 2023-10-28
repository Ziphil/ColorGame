//

import {
  Color
} from "/source/util/color";
import {
  pick
} from "/source/util/misc";


export function generateColorQuiz(targetColor: Color, wrongColors: Array<Color>): ColorQuiz {
  const correctIndex = Math.floor(Math.random() * 4);
  const choices = [];
  choices.push(...pick(wrongColors, 3).map((color) => ({color, correct: false})));
  choices.splice(correctIndex, 0, {color: targetColor, correct: true});
  return {targetColor, choices};
}

export type ColorQuiz = {
  targetColor: Color,
  choices: Array<ColorQuizChoice>
};
export type ColorQuizChoice = {
  color: Color,
  correct: boolean
};