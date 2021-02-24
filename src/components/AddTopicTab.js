import { useDispatch } from "react-redux";
import "../styles.css";

const AddTopicTab = () => {
  const dispatch = useDispatch();
  let input;

  const handleClick = (value) => {
    if (value) dispatch({ type: "ADD_TOPIC", topic: value });
  };

  const keyPressed = (e) => {
    if (e.key === "Enter") {
      handleClick(e.target.value);
      e.target.value = "";
      e.target.blur();
    }
  };
  return (
    <div className="tab">
      <input
        placeholder="ex: What's more important for my next job?"
        ref={(node) => {
          input = node;
        }}
        onKeyPress={keyPressed}
      />
      <button
      className="button tab-enter-button"
        onClick={() => {
          handleClick(input.value);
          input.value = "";
        }}
      >OK</button>
    </div>
  );
};

export default AddTopicTab;
