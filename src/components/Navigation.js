import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Navigation = ({ currentChoice, choices, numberOfQuestions }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePrevQuestion = () => {
    if (currentChoice === 0) {
      history.push("/form");
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
