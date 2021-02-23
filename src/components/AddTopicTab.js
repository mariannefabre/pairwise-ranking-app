import { useDispatch } from "react-redux";
import "../styles.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";

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
      <AddCircleIcon
      id="tab-add-button"
        onClick={() => {
          handleClick(input.value);
          input.value = "";
        }}
      />
    </div>
  );
};

export default AddTopicTab;
