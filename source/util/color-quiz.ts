//

import {
  Color
} from "/source/util/jis-color";
import {
  modDiff,
  pick
} from "/source/util/misc";


export function createColorQuiz(colors: Array<Color>, difficulty: 1 | 2 | 3): ColorQuiz {
  const targetColor = colors[Math.floor(Math.random() * colors.length)];
  const wrongColors = generateWrongColors(colors, targetColor, difficulty);
  const quiz = generateQuiz(targetColor, wrongColors);
  return quiz;
}

function generateWrongColors(colors: Array<Color>, targetColor: Color, difficulty: 1 | 2 | 3) {
  const otherColors = colors.filter((color) => color !== targetColor);
  const wrongColors = [];
  if (difficulty === 1) {
    wrongColors.push(...pick(otherColors, 3));
  } else if (difficulty === 2) {
    const wrongHue = Math.floor(Math.random() * 100);
    const targetSimilarColors = otherColors.filter((color) => modDiff(color.munsellHue, targetColor.munsellHue, 100) < 10);
    const wrongSimilarColors = otherColors.filter((color) => modDiff(color.munsellHue, wrongHue, 100) < 10);
    wrongColors.push(...pick(targetSimilarColors, 1));
    wrongColors.push(...pick(wrongSimilarColors, 2));
  } else {
    const targetSimilarColors = otherColors.filter((color) => modDiff(color.munsellHue, targetColor.munsellHue, 100) < 10);
    wrongColors.push(...pick(targetSimilarColors, 3));
  }
  return wrongColors;
}

function generateQuiz(targetColor: Color, wrongColors: Array<Color>): ColorQuiz {
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