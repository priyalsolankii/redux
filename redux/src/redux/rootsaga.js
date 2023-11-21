import { all, fork } from "redux-saga/effects";

import {watchGetProducts} from "../features/products/ProductV2.saga"

export default function* rootSaga() {
  yield all([fork(watchGetProducts)]);
}