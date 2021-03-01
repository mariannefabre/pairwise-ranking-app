import { useSelector } from "react-redux";
import "./styles.css";
import Choice from "./components/Choice";
import Ranking from "./components/Ranking";
import Form from "./components/Form";
import Introduction from "./components/Introduction";

function App() {
  const survey = useSelector((state) => state.survey);

  return (
    <div className="App">
      
      <h1>Pairwise Comparison</h1>

      {!survey.isSurveyStarted && !survey.isSurveyFinished && (
        <div>
          <Introduction />
          <Form />
        </div>
      )}
      {survey.isSurveyStarted && !survey.isSurveyFinished && <Choice />}
      {survey.isSurveyFinished && <Ranking />}
    </div>
  );
}

export default App;
