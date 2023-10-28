//

import {
  Color
} from "/source/util/jis-color";


export function createColorQuiz(colors: Array<Color>, level: 1 | 2 | 3): ColorQuiz {
  const targetIndex = Math.floor(Math.random() * colors.length);
  const targetColor = colors[targetIndex];
  const otherColors = colors.filter((color, index) => index !== targetIndex);
  const candidateColors = [];
  for (let current = 0; current < 3; current ++) {
    const index = Math.floor(Math.random() * otherColors.length);
    candidateColors.push(otherColors[index]);
    otherColors.splice(index, 1);
  }
  const correctChoiceIndex = Math.floor(Math.random() * 4);
  const choiceColors = [];
  for (let current = 0; current < 4; current ++) {
    if (current === correctChoiceIndex) {
      choiceColors.push(targetColor);
    } else {
      const index = Math.floor(Math.random() * candidateColors.length);
      choiceColors.push(candidateColors[index]);
      candidateColors.splice(index, 1);
    }
  }
  return {targetColor, choiceColors, correctChoiceIndex};
}

export type ColorQuiz = {
  targetColor: Color,
  choiceColors: Array<Color>,
  correctChoiceIndex: number
};
