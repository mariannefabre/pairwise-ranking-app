import AddOptionTab from "./AddOptionTab";
import OptionList from "./OptionList";
import AddTopicTab from "./AddTopicTab";
import "../styles.css";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const topic = useSelector((state) => state.topic);
  const options = useSelector((state) => state.options);
  const dispatch = useDispatch();

  const startSurvey = () => {
    if (options.length > 1 && topic)
      dispatch({ type: "START_QUESTIONNAIRE", options });
  };

  return (
    <div className="home">
      <p className="homepage-step">1. Enter a topic</p>
      <AddTopicTab />
      <h2>{topic}</h2>
      <p className="homepage-step"> 2. Add options</p>
      <AddOptionTab />
      <OptionList />
      <button className="main-button button" onClick={startSurvey}>
        START
      </button>
    </div>
  );
};

export default Home;
