import { useDispatch } from "react-redux";
import '../styles.css';


const AddOptionTab = () => {
  const dispatch = useDispatch();
  let input;

  const handleSubmit = (value) => {
    if (value) dispatch({ type: "ADD_OPTION", payload: value });
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
        placeholder="Enter option (ex: Work-life balance)"
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
        +
      </button>
    </div>
  );
};

export default AddOptionTab;
