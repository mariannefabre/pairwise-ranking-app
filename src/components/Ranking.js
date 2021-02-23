import { useSelector, useDispatch } from "react-redux";
import "../styles.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

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

  const renderedRanking = optionsWithScores.map((option) => {
    rank++;
    return (
      <tr key={option.id}>
        <td className="ranking-data">{rank}</td>
        <td className="ranking-data">{option.text}</td>
        <td className="ranking-data">
          {option.score}{" "}
          <ThumbUpIcon className="thumb-up"  />
        </td>
        <td className="ranking-data">
          {options.length - 1 - option.score}{" "}
          <ThumbDownIcon className="thumb-down" />
        </td>
      </tr>
    );
  });

  return (
    <div className="ranking">
      <h2>{topic}</h2>
      <table className="ranking-table">
        <tbody>{renderedRanking}</tbody>
      </table>
      <button className="button" onClick={handleRetakeTest}>
        Retake Questionnaire
      </button>
      <button className="button" onClick={handleCreateNew}>
        Create New Questionnaire
      </button>
    </div>
  );
};

export default Ranking;
