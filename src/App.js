import { useSelector } from "react-redux";
import "./styles.css";
import Choice from "./components/Choice";
import Ranking from "./components/Ranking";
import Form from "./components/Form";

function App() {
  const survey = useSelector((state) => state.survey);

  return (
    <div className="App">
      <div className="container"></div>
        <h1>Pairwise Ranking</h1>
        {!survey.isSurveyStarted && !survey.isSurveyFinished && <Form />}
        {survey.isSurveyStarted && !survey.isSurveyFinished && <Choice />}
        {survey.isSurveyFinished && <Ranking />}
    </div>
  );
}

export default App;
