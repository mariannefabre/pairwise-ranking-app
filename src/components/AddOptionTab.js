import { useDispatch } from "react-redux";
import '../styles.css';

const AddOptionTab = () => {
  const dispatch = useDispatch();
  let input;

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: "ADD_OPTION", name: e.target.value });
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
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default AddOptionTab;
