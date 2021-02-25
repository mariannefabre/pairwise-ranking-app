import { useDispatch } from "react-redux";
import "../styles.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const AddOptionTab = () => {
  const dispatch = useDispatch();
  let input;

  const handleClick = (value) => {
    if (value) dispatch({ type: "ADD_OPTION", name: value.trim() });
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
        placeholder="ex: Work-life balance"
        ref={(node) => {
          input = node;
        }}
        onKeyPress={keyPressed}
      />
      <AddCircleIcon
        id="addCircleIcon"
        onClick={() => {
          handleClick(input.value);
          input.value = "";
        }}
      />
    </div>
  );
};

export default AddOptionTab;
