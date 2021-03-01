import { useDispatch, useSelector } from "react-redux";
import "../styles.css";
import AddIcon from "@material-ui/icons/Add";
import OptionList from "./OptionList";
import { useEffect } from "react";

const Form = () => {
  const dispatch = useDispatch();
  const options = useSelector((state) => state.options);
  const topic = useSelector((state) => state.topic);

  let topicInput;
  let optionInput;

  useEffect(() => {
    topicInput.value = topic;
  }, [topicInput]);

  const startSurvey = (e) => {
    e.preventDefault();
    if (options.length > 1 && topicInput.value.trim()) {
      dispatch({ type: "ADD_TOPIC", topic: topicInput.value });
      dispatch({ type: "START_QUESTIONNAIRE", options });
      console.log();
    }
  };
  const handleClick = (value) => {
    if (value.trim()) dispatch({ type: "ADD_OPTION", name: value.trim() });
  };

  const keyPressed = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleClick(e.target.value);
      e.target.value = "";
      e.target.blur();
    }
  };

  return (
    <form className="form" onSubmit={startSurvey}>
      <div className="field-container">
        <label className="form-label">1. Enter a topic</label>
        <div className="form-tab">
          <input
            className="form-input"
            type="text"
            placeholder="ex: What's more important for my next job?"
            ref={(node) => {
              topicInput = node;
            }}
            required
          />
        </div>
      </div>
      <div className="field-container">
        <label className="form-label">2. Add options</label>
        <div className="form-tab">
          <input
            className="form-input"
            type="text"
            placeholder="ex: Work-life balance"
            ref={(node) => {
              optionInput = node;
            }}
            onKeyPress={keyPressed}
          />
          <AddIcon
            id="addIcon"
            onClick={() => {
              handleClick(optionInput.value);
              optionInput.value = "";
            }}
          />
        </div>
      </div>
      <OptionList />

      <button type="submit" id="start-button" className="main-button button">
        START
      </button>
    </form>
  );
};

export default Form;
