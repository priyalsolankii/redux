import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";


import ProductsV2Slice from "../features/products/ProductsV2.Slice";
import rootSaga from "./rootsaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    
    mereProducts: ProductsV2Slice,
  },
  middleware: (current) => current({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;