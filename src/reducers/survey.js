const survey = (
  state = { isSurveyStarted: false, isSurveyFinished: false },
  action
) => {
  switch (action.type) {
    case "START_QUESTIONNAIRE":
      const options = action.options;
      let pairs = [];

      options.forEach((firstOption) => {
        options.forEach((secondOption) => {
          const firstId = firstOption.id;
          const secondId = secondOption.id;
          if (
            firstId !== secondId &&
            !pairs.find((pair) => pair[0] === secondId && pair[1] === firstId)
          ) {
            pairs.push([firstId, secondId]);
          }
        });
      });
      pairs.sort(() => Math.random() - 0.5);

      return {
        ...state,
        isSurveyStarted: true,
        isSurveyFinished: false,
        pairs,
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
    case "FINISH_QUESTIONNAIRE":
      return {
        ...state,
        isSurveyFinished: true,
      };
    case "GO_TO_HOMEPAGE":
      // figure out if we want to keep the previous data or not
      return {
        ...state,
        isSurveyStarted: false,
        isSurveyFinished: false,
      };
    default:
      return state;
  }
};

export default survey;
