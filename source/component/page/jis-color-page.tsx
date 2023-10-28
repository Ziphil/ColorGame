//

import {
  ReactElement, useCallback, useState
} from "react";
import Button from "/source/component/atom/button";
import ColorView from "/source/component/atom/color-view";
import Radio from "/source/component/atom/radio";
import PageContainer from "/source/component/compound/page-container";
import {
  create
} from "/source/component/create";
import {
  createColorQuiz
} from "/source/util/color-quiz";
import {
  JIS_COLORS
} from "/source/util/jis-color";


const JisColorPage = create(
  require("./jis-color-page.scss"), "JisColorPage",
  function ({
  }: {
  }): ReactElement {

    const [difficulty, setDifficulty] = useState<1 | 2 | 3>(1);
    const [quiz, setQuiz] = useState(createColorQuiz(JIS_COLORS, difficulty));
    const [showAnswer, setShowAnswer] = useState(false);

    const proceed = useCallback(function () {
      if (showAnswer) {
        setQuiz(createColorQuiz(JIS_COLORS, difficulty));
        setShowAnswer(false);
      } else {
        setShowAnswer(true);
      }
    }, [showAnswer, difficulty]);

    const changeDifficulty = useCallback(function (difficulty: 1 | 2 | 3) {
      setDifficulty(difficulty);
      setQuiz(createColorQuiz(JIS_COLORS, difficulty));
      setShowAnswer(false);
    }, []);

    const node = (
      <PageContainer>
        <div styleName="main">
          <div styleName="difficulty">
            <Radio name="難易度" value="Easy" checked={difficulty === 1} onSet={(checked) => checked && changeDifficulty(1)}>Easy</Radio>
            <Radio name="難易度" value="Normal" checked={difficulty === 2} onSet={(checked) => checked && changeDifficulty(2)}>Normal</Radio>
            <Radio name="難易度" value="Hard" checked={difficulty === 3} onSet={(checked) => checked && changeDifficulty(3)}>Hard</Radio>
          </div>
          <p styleName="question">
            <span styleName="target-name">{quiz.targetColor.name}</span>
            <span styleName="after-target-name">はどれ?</span>
          </p>
          <div styleName="color-list">
            {quiz.choices.map((choice, index) => (
              <div key={`${index}-${choice.color.name}`} styleName="color">
                <ColorView
                  color={choice.color}
                  correct={showAnswer ? choice.correct : null}
                  showInfo={showAnswer}
                  pop={showAnswer && choice.correct}
                  onClick={!showAnswer ? proceed : undefined}
                />
              </div>
            ))}
          </div>
          <div styleName="button">
            <Button onClick={proceed}>
              {showAnswer ? "次へ" : "色名を表示"}
            </Button>
          </div>
        </div>
      </PageContainer>
    );
    return node;

  }
);


export default JisColorPage;