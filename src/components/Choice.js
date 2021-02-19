import { useDispatch, useSelector } from "react-redux";
import "../styles.css";


const Choice = () => {
  const pairs = useSelector((state) => state.survey.pairsToCompare);
  const choices = useSelector((state) => state.choices);
  const currentChoice = useSelector((state) => state.survey.currentChoice);
  const topic = useSelector(state => state.topic);
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
  }
  const handleNextNavigation = () => {
      if (choices[currentChoice]) {
        dispatchNextQuestion();
      }
    }
  
// check className to modify this function
  const getNavVisibility = (nav) => {
    if (nav === "prev") {
      return currentChoice > 0 ? "" : "hidden";
    } else {
      return choices[currentChoice] ? "" : "hidden";
    }
  };

  if (currentChoice < pairs.length)
    return (
      <div className="choice">
        <h2>{topic}</h2>
        <button onClick={handleChoice} className={getClassName(firstOption)}>
          {firstOption.text}
        </button>
        <p>VS</p>
        <button className={getClassName(secondOption)} onClick={handleChoice}>
          {secondOption.text}
        </button>

        <div className="navigation">
          <button
            className={getNavVisibility("prev")}
            onClick={handlePrevNavigation}
          >
            {"<"}
          </button>
          <p>
            {currentChoice + 1}/{pairs.length}
          </p>
          <button
            id="next"
            className={getNavVisibility("next")}
            onClick={handleNextNavigation}
          >
            {">"}
          </button>
        </div>
      </div>
    );
};

export default Choice;
