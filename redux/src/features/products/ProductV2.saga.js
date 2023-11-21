import { put, takeLatest } from "redux-saga/effects";
import { getProductsFailed, getProductsSuccess } from "./ProductsV2.Slice";

const getRequest = async (url) => {
  try {
    const response = await fetch(url);
    const parsedResponse = await response.json();
    return parsedResponse;
  } catch (err) {
    return null;
  }
};

function* getProducts() {
  console.log("4. Request recieved inside getProducts saga");

  try {
    const apiResponse = yield getRequest("https://jsonplaceholder.typicode.com/users");
    console.log("5. API response inside getProducts saga");

    if (!apiResponse) {
      console.log("5.1 API response inside getProducts saga is failed");
      yield put(getProductsFailed());
      return;
    }
    console.log("5.2 API response inside getProducts saga is passed");
    yield put(getProductsSuccess({ results: apiResponse }));
  } catch (err) {
    console.log(
      "5.3 API response inside getProducts saga is failed & inside catch"
    );
    yield put(getProductsFailed());
  }
}

export function* watchGetProducts() {
  yield takeLatest("productsV2/getProducts", getProducts);
}