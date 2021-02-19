const survey = (
  state = { isSurveyStarted: false, isSurveyFinished: false },
  action
) => {
  switch (action.type) {
    case "START_SURVEY":
      const options = action.options;
      let pairs = [];

      options.forEach((firstOption) => {
        options.forEach((secondOption) => {
          if (firstOption !== secondOption && !pairs.find((pair) => (pair[0]===secondOption && pair[1]===firstOption))) {  
            pairs.push([firstOption, secondOption]);
          }
        });
      });
      return {
        ...state,
        isSurveyStarted: true,
        pairsToCompare: pairs,
        currentChoice: 0,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentChoice: action.currentChoice,
      };
    case "PREVIOUS_QUESTION":
      return {
        ...state,
        currentChoice: action.currentChoice,
      };
    case "FINISH_SURVEY":
      return {
        ...state,
        isSurveyFinished: true,
      };
    default:
      return state;
  }
};

export default survey;
