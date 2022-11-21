import { call, put, takeEvery, select } from "redux-saga/effects";
import constants from "../action/constants";
import { createAction } from "@reduxjs/toolkit";
import { setDataPost } from "../reducer/dataReducer";
import { IValuePost } from "../reducer/dataReducer";
import { getData, delData, postData, repairData } from "../service/apiData";

export const postDataAction = createAction(constants.POST_DATA);
export const getDataAction = createAction(constants.GET_DATA);
export const delDataAction = createAction(constants.DEL_DATA);
export const repairDataAction = createAction(constants.RE_DATA);

export function* postDataSaga(action: any) {
  try {
    yield call(() => postData(action.payload));
  } catch (error) {
    console.log(error);
  }
}

export function* watchPostData() {
  yield takeEvery(postDataAction, postDataSaga);
}

export function* getDataSaga() {
  try {
    const res: IValuePost["data"] = yield call(() => getData());
    yield put(setDataPost(res));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetData() {
  yield takeEvery(getDataAction, getDataSaga);
}

export function* delDataSaga(action: any) {
  try {
    yield call(() => delData(action.payload));
  } catch (error) {
    console.log(error);
  }
}

export function* watchDelData() {
  yield takeEvery(delDataAction, delDataSaga);
}

export function* repairDataSaga(action: any) {
  try {
    yield call(() => repairData(action.payload));
  } catch (error) {
    console.log(error);
  }
}

export function* watchRepairData() {
  yield takeEvery(repairDataAction, repairDataSaga);
}
