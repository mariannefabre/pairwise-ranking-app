import { useSelector, useDispatch } from "react-redux";
import "../styles.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const Ranking = () => {
  const topic = useSelector((state) => state.topic);
  const options = useSelector((state) => state.options);
  const dispatch = useDispatch();

  // sort from highest to lowest score
  let rankedOptions = options.map((x) => ({ ...x }));
  rankedOptions.sort((a, b) => b.score - a.score);
  let rank = 0;

  const handleRetakeTest = () => {
    dispatch({
      type: "START_SURVEY",
      options: options,
    });
    dispatch({
      type: "UPDATE_SCORES",
      choices: [],
    });
    dispatch({
      type: "RETAKE_TEST",
    });
    
  };

  const renderedRanking = rankedOptions.map((option) => {
    rank++;
    return (
      <tr key={option.id}>
        <td className="ranking-data">{rank}</td>
        <td className="ranking-data">{option.text}</td>
        <td className="ranking-data">
          {option.score}{" "}
          <ThumbUpIcon style={{ fontSize: 20, color: "#48bf48" }} />
        </td>
        <td className="ranking-data">
          {options.length - 1 - option.score}{" "}
          <ThumbDownIcon style={{ fontSize: 20, color: "red" }} />
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
      <button onClick={handleRetakeTest}>Retake the test</button>
    </div>
  );
};

export default Ranking;
