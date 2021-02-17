import { useDispatch } from "react-redux";
import "../styles.css"

const AddTopicTab = () => {
  const dispatch = useDispatch();
  let input;

  const handleSubmit = (value) => {
    if (value) dispatch({ type: "ADD_TOPIC", payload: value });
  };
  const keyPressed = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e.target.value);
      e.target.value = "";
    }
  };
  return (
    <div className="tab">
      <input
        placeholder="Enter topic (ex: What's the most important for me in a job)"
        ref={(node) => {
          input = node;
        }}
        onKeyPress={keyPressed}
      />
      <button
        onClick={() => {
          handleSubmit(input.value);
          input.value = "";
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default AddTopicTab;
