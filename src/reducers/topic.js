const topic = (state = "", action) => {
  if (action.type === "ADD_TOPIC") {
    return action.payload;
  }
  return state;
};

export default topic;