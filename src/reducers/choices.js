const choices = (state = [], action) => {

  switch (action.type) {
    case "MAKE_CHOICE":
      if (state[action.currentChoice]) {
        return state.map((choice, index) => {
          if (index !== action.currentChoice) {
            return choice;
          }
          return {
            id: action.currentChoice,
            pair: action.pair,
            result: action.result,
          };
        });
      } else {
        return [
          ...state,
          {
            id: action.currentChoice,
            pair: action.pair,
            result: action.result,
          },
        ];
      }
    default:
      return state;
  }
};

export default choices;
