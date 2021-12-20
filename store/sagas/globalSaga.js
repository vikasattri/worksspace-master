import { put, takeLatest } from "redux-saga/effects";

import { GET_LIST, SET_LIST } from "../constants/Constants";

function* getWareHouseList({ payload }) {
  console.log(payload, "PAYLOAd");
  yield put({
    type: SET_LIST,
    payload: payload,
  });
}

function* globalSaga() {
  yield takeLatest(GET_LIST, getWareHouseList);
}

export default globalSaga;
