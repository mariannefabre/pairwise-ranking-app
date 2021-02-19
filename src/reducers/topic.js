const topic = (state = "", action) => {
  if (action.type === "ADD_TOPIC") {
    return action.topic;
  }
  return state;
};

export default topic;