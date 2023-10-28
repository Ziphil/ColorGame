//

import {
  faArrowRight,
  faLightbulb
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
  ReactElement,
  useCallback,
  useState
} from "react";
import Button from "/source/component/atom/button";
import ColorView from "/source/component/atom/color-view";
import Radio from "/source/component/atom/radio";
import PageContainer from "/source/component/compound/page-container";
import {
  create
} from "/source/component/create";
import {
  createPccsColorQuiz
} from "/source/util/pccs-color";


const PccsColorPage = create(
  require("./pccs-color-page.scss"), "PccsColorPage",
  function ({
  }: {
  }): ReactElement {

    const [difficulty, setDifficulty] = useState<1 | 2 | 3>(1);
    const [quiz, setQuiz] = useState(createPccsColorQuiz(difficulty));
    const [showAnswer, setShowAnswer] = useState(false);

    const proceed = useCallback(function () {
      if (showAnswer) {
        setQuiz(createPccsColorQuiz(difficulty));
        setShowAnswer(false);
      } else {
        setShowAnswer(true);
      }
    }, [showAnswer, difficulty]);

    const changeDifficulty = useCallback(function (difficulty: 1 | 2 | 3) {
      setDifficulty(difficulty);
      setQuiz(createPccsColorQuiz(difficulty));
      setShowAnswer(false);
    }, []);

    const node = (
      <PageContainer>
        <div styleName="main">
          <div styleName="difficulty">
            <Radio name="難易度" value="Easy" checked={difficulty === 1} onSet={(checked) => checked && changeDifficulty(1)}>Easy</Radio>
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
              <FontAwesomeIcon styleName="button-icon" icon={showAnswer ? faArrowRight : faLightbulb}/>
              {showAnswer ? "次へ" : "色名を表示"}
            </Button>
          </div>
        </div>
      </PageContainer>
    );
    return node;

  }
);


export default PccsColorPage;