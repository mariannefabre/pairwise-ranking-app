import { useSelector, useDispatch } from "react-redux";
import "../styles.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ReplayIcon from '@material-ui/icons/Replay';

const Ranking = () => {
  const topic = useSelector((state) => state.topic);
  const options = useSelector((state) => state.options);
  const choices = useSelector((state) => state.choices);
  const dispatch = useDispatch();

  const optionsWithScores = options.map((x) => ({ ...x, score: 0 }));

  choices.forEach((choice) => {
    let chosenOption = optionsWithScores.find(
      (option) => option.id === choice.selectedOption
    );
    chosenOption.score++;
  });

  // sort from highest to lowest score
  optionsWithScores.sort((a, b) => b.score - a.score);
  let rank = 0;

  const handleRetakeTest = () => {
    dispatch({
      type: "START_QUESTIONNAIRE",
      options: options,
    });
    dispatch({
      type: "RETAKE_TEST",
    });
  };

  const handleCreateNew = () => {
    dispatch({ type: "CREATE_NEW_QUESTIONNAIRE" });
  };

  const renderedRanking = optionsWithScores.map((option, index) => {
    rank++;
    return (
      <tr key={option.id}>
        <td className="ranking-data">{rank}</td>
        <td className="ranking-data">{option.text}</td>
        <td className="ranking-data">
          {option.score}&nbsp;
          <ThumbUpIcon id="thumb-up" />
        </td>
        <td className="ranking-data">
          {options.length - 1 - option.score}&nbsp;
          <ThumbDownIcon id="thumb-down" />
        </td>
      </tr>
    );
  });

  return (
    <div className="ranking-container">
      <h2>{topic}</h2>
      <table className="ranking-table">
        <tbody>{renderedRanking}</tbody>
      </table>
      <div className="flex-column">
      <ReplayIcon id="icon" className="replay-button" onClick={handleRetakeTest}/>
      <button className="button main-button" onClick={handleCreateNew}>
        New Questionnaire
      </button>
      </div>

    </div>
  );
};

export default Ranking;
