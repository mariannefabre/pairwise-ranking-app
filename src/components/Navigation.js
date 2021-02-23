import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
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
      <NavigateBeforeIcon
        id="nav-icon"
        className={currentChoice >= 0 ? "nav-icon" : "hidden"}
        onClick={handlePrevQuestion}
      />
      <p>
        {currentChoice + 1}/{numberOfQuestions}
      </p>
      <NavigateNextIcon
        id="nav-icon"
        className={choices[currentChoice] ? "nav-icon" : "hidden"}
        onClick={handleNextQuestion}
      />
    </div>
  );
};

export default Navigation;
