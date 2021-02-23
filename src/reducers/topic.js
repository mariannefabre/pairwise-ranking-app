const topic = (state = "", action) => {
  if (action.type === "ADD_TOPIC") {
    return action.topic;
  } else if (action.type === "CREATE_NEW_QUESTIONNAIRE") {
    return "";
  }
  return state;
};

export default topic;
