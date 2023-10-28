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

    const [type, setType] = useState<"random" | "sameTone" | "sameHue">("random");
    const [quiz, setQuiz] = useState(createPccsColorQuiz(type));
    const [showAnswer, setShowAnswer] = useState(false);

    const proceed = useCallback(function () {
      if (showAnswer) {
        setQuiz(createPccsColorQuiz(type));
        setShowAnswer(false);
      } else {
        setShowAnswer(true);
      }
    }, [showAnswer, type]);

    const changeType = useCallback(function (type: "random" | "sameTone" | "sameHue") {
      setType(type);
      setQuiz(createPccsColorQuiz(type));
      setShowAnswer(false);
    }, []);

    const node = (
      <PageContainer>
        <div styleName="main">
          <div styleName="difficulty">
            <Radio name="出題タイプ" value="ランダム" checked={type === "random"} onSet={(checked) => checked && changeType("random")}>ランダム</Radio>
            <Radio name="出題タイプ" value="トーンを統一" checked={type === "sameTone"} onSet={(checked) => checked && changeType("sameTone")}>トーンを統一</Radio>
            <Radio name="出題タイプ" value="色相を統一" checked={type === "sameHue"} onSet={(checked) => checked && changeType("sameHue")}>色相を統一</Radio>
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