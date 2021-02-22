const choices = (state = [], action) => {
  switch (action.type) {
    case "SAVE_CHOICE":
      if (state[action.currentChoice]) {
        return state.map((choice, index) => {
          if (index !== action.currentChoice) {
            return choice;
          }
          return {
            id: action.currentChoice,
            pair: action.pair,
            selectedOption: action.selectedOption,
          };
        });
      } else {
        return [
          ...state,
          {
            id: action.currentChoice,
            pair: action.pair,
            selectedOption: action.selectedOption,
          },
        ];
      }
    case "RETAKE_TEST":
      return [];
    default:
      return state;
  }
};

export default choices;
