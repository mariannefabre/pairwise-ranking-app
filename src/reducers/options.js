const initialState = [
  { id: 0, text: "Salary"},
  { id: 1, text: "Great colleagues"},
  { id: 2, text: "Work-life-balance"},
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
        { id: nextOptionsId(state), text: action.name},
      ];

    case "REMOVE_OPTION":
      return state.filter((option) => action.id !== option.id);

    case "EDIT_OPTION":
      return state.map((item, id) => {
        if (id !== action.id) {
          return item;
        }
        return { ...item, text: action.name};
      });
      case "CREATE_NEW_QUESTIONNAIRE":
      return [];
    default:
      return state;
  }
};

export default options;
