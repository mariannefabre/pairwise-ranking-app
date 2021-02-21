import { useDispatch, useSelector } from "react-redux";
import "../styles.css";
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";

const Choice = () => {
  const pairs = useSelector((state) => state.survey.pairsToCompare);
  const choices = useSelector((state) => state.choices);
  const currentChoice = useSelector((state) => state.survey.currentChoice);
  const topic = useSelector((state) => state.topic);
  const dispatch = useDispatch();

  const currentPair = pairs[currentChoice];
  const firstOption = currentPair[0];
  const secondOption = currentPair[1];

  const dispatchNextQuestion = () => {
    dispatch({
      type: "NEXT_QUESTION",
      currentChoice: currentChoice + 1,
    });
  };

  const dispatchPreviousQuestion = () => {
    dispatch({
      type: "PREVIOUS_QUESTION",
      currentChoice: currentChoice - 1,
    });
  };

  const handleChoice = (e) => {
    let selected;
    switch (e.target.innerHTML) {
      case firstOption.text:
        selected = firstOption;
        break;
      case secondOption.text:
        selected = secondOption;
        break;
      default:
        break;
    }
    dispatch({
      type: "MAKE_CHOICE",
      currentChoice: currentChoice,
      pair: currentPair,
      result: selected,
    });
    if (pairs[currentChoice + 1]) {
      dispatchNextQuestion();
    } else {
      dispatch({ type: "FINISH_SURVEY" });
    }
  };

  const getClassName = (option) => {
    if (choices[currentChoice]) {
      return choices[currentChoice].result === option
        ? "choice-option-selected"
        : "choice-option";
    } else {
      return "choice-option";
    }
  };

  const handlePrevNavigation = () => {
    dispatchPreviousQuestion();
  };
  const handleNextNavigation = () => {
    if (choices[currentChoice]) {
      dispatchNextQuestion();
    }
  };

  if (currentChoice < pairs.length)
    return (
      <div className="choice">
        <h2>{topic}</h2>
        <button
          id="first-option"
          key={Math.random()}
          onClick={handleChoice}
          className={getClassName(firstOption)}
        >
          {firstOption.text}
        </button>
        <p>VS</p>
        <button
          id="second-option"
          key={Math.random()}
          className={getClassName(secondOption)}
          onClick={handleChoice}
        >
          {secondOption.text}
        </button>

        <div className="navigation">
          <ArrowBackIosSharpIcon
            className={currentChoice > 0 ? "" : "hidden"}
            onClick={handlePrevNavigation}
          />
          <p>
            {currentChoice + 1}/{pairs.length}
          </p>
          <ArrowForwardIosSharpIcon
            className={choices[currentChoice] ? "" : "hidden"}
            onClick={handleNextNavigation}
          />
        </div>
      </div>
    );
};

export default Choice;
