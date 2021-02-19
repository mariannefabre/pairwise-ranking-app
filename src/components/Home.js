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
      dispatch({ type: "START_SURVEY", options: options });
    }
    // add message for missing information
  };


  return ( <div className="home">
    <p className="homepage-step">1.</p>
    <AddTopicTab />
    <h2>{topic}</h2>
    <p className="homepage-step"> 2.</p>
    <AddOptionTab />
    <OptionList />
    <button fontSize="large" className="start-button" onClick={startSurvey}>START</button>
    </div>)
}

export default Home;