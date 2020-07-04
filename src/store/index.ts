import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import storeReducer from "./reducer";
import { rootSaga } from "../containers";

export const configStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(storeReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};
