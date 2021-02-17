const survey = (state = { isSurveyStarted: false, isSurveyFinished: false }, action) => {
  switch (action.type) {
    case "START_SURVEY":
      const options = action.payload;
      let pairs = [];

      options.forEach((firstOption) => {
        options.forEach((secondOption) => {
          if (firstOption !== secondOption) {
            pairs.push([firstOption, secondOption]);
          }
          // add condition to remove duplicates
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
          isSurveyFinished: true
        }
    default:
      return state;
  }
};

export default survey;
