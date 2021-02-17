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
  }, []);

  const renderedRanking = options.map((option) => {
    return (
      <p key={option.id}>
        {option.text} | {option.score}
      </p>
    );
  });

  return (
    <div className="ranking">
      <h2>{topic}</h2>
      {renderedRanking}
    </div>
  );
};

export default Ranking;
