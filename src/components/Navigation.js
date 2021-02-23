import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import { useDispatch } from "react-redux";

const Navigation = ({ currentChoice, choices, numberOfQuestions }) => {
  const dispatch = useDispatch();

  const handlePrevQuestion = () => {
    if (currentChoice === 0) {
      dispatch({ type: "GO_TO_HOMEPAGE" });
    }
    dispatch({
      type: "PREVIOUS_QUESTION",
      currentChoice: currentChoice - 1,
    });
  };

  const handleNextQuestion = () => {
    if (choices[currentChoice]) {
      dispatch({
        type: "NEXT_QUESTION",
        currentChoice: currentChoice + 1,
      });
    }
  };
  return (
    <div className="navigation">
      <ArrowBackIosSharpIcon
        className={currentChoice >= 0 ? "" : "hidden"}
        onClick={handlePrevQuestion}
      />
      <p>
        {currentChoice + 1}/{numberOfQuestions}
      </p>
      <ArrowForwardIosSharpIcon
        className={choices[currentChoice] ? "" : "hidden"}
        onClick={handleNextQuestion}
      />
    </div>
  );
};

export default Navigation;
