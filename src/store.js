import { configureStore } from "@reduxjs/toolkit";
import options from "./reducers/options";
import topic from "./reducers/topic";
import choices from "./reducers/choices";
import survey from "./reducers/survey";
import { loadState } from "./util/sessionStorage";

const preloadedState = loadState();

export default configureStore({
  reducer: {
    topic,
    options,
    survey,
    choices,
  },
  preloadedState,
});
