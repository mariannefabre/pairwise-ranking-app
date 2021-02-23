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
            !pairs.find(
              (pair) =>
                (pair[0] === secondId && pair[1] === firstId) ||
                (pair[0] === firstId && pair[1] === secondId)
            )
          ) {
            Math.random() < 0.5
              ? pairs.push([firstId, secondId])
              : pairs.push([secondId, firstId]);
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
      return {
        ...state,
        isSurveyStarted: false,
        isSurveyFinished: false,
      };
    case "CREATE_NEW_QUESTIONNAIRE":
      return {
        ...state,
        pairs: [],
        isSurveyStarted: false,
        isSurveyFinished: false,
      };
    default:
      return state;
  }
};

export default survey;
