//

import {
  Color
} from "/source/util/jis-color";


export function createColorQuiz(colors: Array<Color>, level: 1 | 2 | 3): ColorQuiz {
  const targetColor = colors[Math.floor(Math.random() * colors.length)];
  const wrongColors = generateWrongColors(colors, targetColor, level);
  const quiz = generateQuiz(targetColor, wrongColors);
  return quiz;
}

function generateWrongColors(colors: Array<Color>, targetColor: Color, level: 1 | 2 | 3) {
  const otherColors = colors.filter((color) => color !== targetColor);
  const wrongColors = [];
  if (level === 1) {
    for (let current = 0; current < 3; current ++) {
      const index = Math.floor(Math.random() * otherColors.length);
      wrongColors.push(otherColors[index]);
      otherColors.splice(index, 1);
    }
  }
  return wrongColors;
}

function generateQuiz(targetColor: Color, wrongColors: Array<Color>): ColorQuiz {
  const copiedWrongColors = [...wrongColors];
  const correctIndex = Math.floor(Math.random() * 4);
  const choices = [];
  for (let current = 0; current < 4; current ++) {
    if (current === correctIndex) {
      choices.push({color: targetColor, correct: true});
    } else {
      const index = Math.floor(Math.random() * copiedWrongColors.length);
      choices.push({color: copiedWrongColors[index], correct: false});
      copiedWrongColors.splice(index, 1);
    }
  }
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