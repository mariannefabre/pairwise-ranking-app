import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "../styles.css";

const Ranking = () => {
  const topic = useSelector((state) => state.topic);
  const options = useSelector((state) => state.options);
  const choices = useSelector((state) => state.choices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "UPDATE_SCORES",
      choices: choices,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // sort from highest to lowest score
  let rankedOptions = options;
  rankedOptions.sort((a, b) => b.score - a.score);
  let rank=0;
  const renderedRanking = rankedOptions.map((option) => {
    rank++;
    return (
      <tr key={option.id}>
        <td className="ranking-row">{rank}</td>
        <td className="ranking-row">{option.text}</td>
        <td className="ranking-row">{option.score}</td>
        <td className="ranking-row">{options.length - 1 - option.score}</td>
      </tr>
    );
  });

  return (
    <div className="ranking">
      <h2>{topic}</h2>
      <table>
        <thead>
        <tr>
        <th className="ranking-heading" >Rank</th>
          <th className="ranking-heading" >Options</th>
          <th className="ranking-heading">Victory</th>
          <th className="ranking-heading">Defeat</th>
        </tr>
        </thead>
        <tbody>
        {renderedRanking}
        </tbody>
      </table>
    </div>
  );
};

export default Ranking;
