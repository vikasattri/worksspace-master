import { fork, all } from "redux-saga/effects";
import globalSaga from "./globalSaga";

export default function* watch() {
  yield all([fork(globalSaga)]);
}
