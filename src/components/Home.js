import AddOptionTab from "./AddOptionTab";
import OptionList from "./OptionList";
import AddTopicTab from "./AddTopicTab";
import "../styles.css";
import {useDispatch, useSelector} from "react-redux";


const Home = () => {

  const topic = useSelector((state) => state.topic);
  const options = useSelector((state) => state.options);
  const dispatch = useDispatch();

  const startSurvey = () => {
    if (topic && options) {
      dispatch({ type: "START_SURVEY", payload: options });
    }
    // add message for missing information
  };


  return ( <div className="home">
    <h1>Pairwise Ranking</h1>
    <AddTopicTab />
    <AddOptionTab />
    <h2>{topic}</h2>
    <OptionList />
    <button className="start-button" onClick={startSurvey}>
      START
    </button>
    </div>)
}

export default Home;