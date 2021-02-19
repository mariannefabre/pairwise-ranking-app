import { useDispatch } from "react-redux";
import "../styles.css"

const AddTopicTab = () => {
  const dispatch = useDispatch();
  let input;

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: "ADD_TOPIC", topic: e.target.value });
      e.target.value = "";
    }
  };
  return (
    <div className="tab">
      <input
        placeholder="Enter topic (ex: What's more important for my next job?)"
        ref={(node) => {
          input = node;
        }}
        onKeyPress={handleKeyPress}
      />
      
    </div>
  );
};

export default AddTopicTab;
