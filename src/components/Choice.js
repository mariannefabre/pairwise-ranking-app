import { useDispatch, useSelector } from "react-redux";
import { useOption } from "../util/helper";
import "../styles.css";
import Navigation from "./Navigation";

const Choice = () => {
  const pairs = useSelector((state) => state.survey.pairs);
  const choices = useSelector((state) => state.choices);
  const currentChoice = useSelector((state) => state.survey.currentChoice);
  const topic = useSelector((state) => state.topic);
  const dispatch = useDispatch();
  const firstOption = useOption(pairs[currentChoice][0]).text;
  const secondOption = useOption(pairs[currentChoice][1]).text;

  const currentPair = pairs[currentChoice];
  const firstOptionId = currentPair[0];
  const secondOptionId = currentPair[1];

  const dispatchNextQuestion = () => {
    dispatch({
      type: "NEXT_QUESTION",
      currentChoice: currentChoice + 1,
    });
  };

  const dispatchSaveChoice = (selectedOption) => {
    dispatch({
      type: "SAVE_CHOICE",
      currentChoice,
      pair: currentPair,
      selectedOption,
    });
  };
  
  const handleChoice = (e) => {
    let selected;
    switch (e.target.innerText) {
      case firstOption:
        selected = firstOptionId;
        break;
      case secondOption:
        selected = secondOptionId;
        break;
      default:
        break;
    }
    dispatchSaveChoice(selected);
    if (pairs[currentChoice + 1]) {
      dispatchNextQuestion();
    } else {
      dispatch({ type: "FINISH_QUESTIONNAIRE" });
    }
  };

  const getClassName = (optionId) => {
    if (choices[currentChoice]) {
      return choices[currentChoice].selectedOption === optionId
        ? "choice-option-selected"
        : "choice-option";
    } else {
      return "choice-option";
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
          className={getClassName(firstOptionId)}
        >
          {firstOption}
        </button>
        <p>VS</p>
        <button
          id="second-option"
          key={Math.random()}
          className={getClassName(secondOptionId)}
          onClick={handleChoice}
        >
          {secondOption}
        </button>
        <Navigation
          currentChoice={currentChoice}
          choices={choices}
          numberOfQuestions={pairs.length}
        />
      </div>
    );
};

export default Choice;
