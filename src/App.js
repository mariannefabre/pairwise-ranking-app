import { useSelector } from "react-redux";
import "./styles.css";
import Choice from "./components/Choice";
import Ranking from "./components/Ranking";
import Home from './components/Home';

function App() {
  
  const survey = useSelector((state) => state.survey);

    return (
      <div className="App">
            <h1>Pairwise Ranking</h1>
            <div className="container"></div>
          {survey.isSurveyFinished && <Ranking/>}
          {survey.isSurveyStarted && !survey.isSurveyFinished && <Choice />}
          {!survey.isSurveyStarted && !survey.isSurveyFinished && <Home/>}
      </div>
    );
}

export default App;
