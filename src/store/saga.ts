import { call, put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";

function* handleSaga(action: any) {
  const { payload, request, type } = action;
  const { url, reducer } = request;
  try {
    const response = yield call(Api, url, payload);
    if(response.code !==0 ){
      return
    }
    if (reducer) {
      yield put({ type: `${type}_REDUCER`, response });
    }
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}

export default function* watchSaga(types:any) {
  for (let i = 0; i < types.length; i++) {
    yield takeLatest(types[i], handleSaga);
  }
}
