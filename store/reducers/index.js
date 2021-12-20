import { combineReducers } from "redux";
import globalReducer from "./globalReducer";

const appReducer = combineReducers(
  Object.assign({
    globalReducer,
  })
);

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
