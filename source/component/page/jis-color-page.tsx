//

import {
  ReactElement, useCallback, useState
} from "react";
import Button from "/source/component/atom/button";
import ColorView from "/source/component/atom/color-view";
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

    const [quiz, setQuiz] = useState(createColorQuiz(JIS_COLORS, 1));
    const [showAnswer, setShowAnswer] = useState(false);

    const proceed = useCallback(function () {
      if (showAnswer) {
        setQuiz(createColorQuiz(JIS_COLORS, 1));
        setShowAnswer(false);
      } else {
        setShowAnswer(true);
      }
    }, [showAnswer]);

    const node = (
      <PageContainer>
        <div styleName="main">
          <p styleName="question">
            <span styleName="target-name">{quiz.targetColor.name}</span>
            <span styleName="after-target-name">はどれ?</span>
          </p>
          <div styleName="color-list">
            {quiz.choiceColors.map((color, index) => (
              <div key={color.name} styleName="color">
                <ColorView color={color} showInfo={showAnswer} pop={showAnswer && quiz.correctChoiceIndex === index}/>
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