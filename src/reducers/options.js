const initialState = [
  { id: 0, text: "Salary", score: 0 },
  { id: 1, text: "Great colleagues", score: 0 },
  { id: 2, text: "Work-life-balance", score: 0 },
];
function nextOptionsId(options) {
  const maxId = options.reduce(
    (maxId, option) => Math.max(option.id, maxId),
    -1
  );
  return maxId + 1;
}

const options = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_OPTION":
      return [
        ...state,
        { id: nextOptionsId(state), text: action.name, score: 0 },
      ];

    case "REMOVE_OPTION":
      return state.filter((option) => action.id !== option.id);

    case "EDIT_OPTION":
      return state.map((item, id) => {
        if (id !== action.id) {
          return item;
        }
        return { ...item, text: action.name };
      });
    case "UPDATE_SCORES":
      let currentOptions = state.map((x) => ({ ...x, score: 0 }));
      if (action.choices) {
        action.choices.forEach((choice) => {
          let chosenOption = currentOptions.find(
            (option) => option.id === choice.selectedOption
          );
          chosenOption.score++;
        });
      }
      return state.map((item, id) => {
        return { ...item, score: currentOptions[id].score };
      });
    default:
      return state;
  }
};

export default options;
