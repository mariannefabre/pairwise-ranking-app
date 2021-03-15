import { useSelector } from "react-redux";
import "./styles.css";
import Choice from "./components/Choice";
import Ranking from "./components/Ranking";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const survey = useSelector((state) => state.survey);

  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <h1>Pairwise Comparison</h1>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/form" component={Form} />
            <Route
              exact
              path="/questionnaire"
              component={survey.isSurveyFinished ? Ranking : Choice}
            />
          </Switch>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
