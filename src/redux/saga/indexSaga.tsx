import { all } from "redux-saga/effects";
import {
  watchPostData,
  watchGetData,
  watchDelData,
  watchRepairData,
} from "./dataSaga";

export default function* rootSaga() {
  yield all([
    watchPostData(),
    watchGetData(),
    watchDelData(),
    watchRepairData(),
  ]);
}
