import Login from "./login";
import LayoutContainer from "./layout";

import { loginTypes } from "./login/types";
import { all } from "redux-saga/effects";
import { watchSaga } from "../store/saga";

const allTypes = [...loginTypes];

export function* rootSaga() {
  yield all([watchSaga(allTypes)]);
}

export { Login, LayoutContainer };
