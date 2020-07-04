import { call, put, takeLatest } from "redux-saga/effects";
import { message } from "antd";
import Api from "../store/api";
import { KEY_TOKEN } from "../containers/login";

/**定义重定向 */
function redirect(param: string, msg: string) {
  message.error(msg + "，3秒后跳转页面");
  setTimeout(() => {
    window.location.href = param;
  }, 3000);
}

/**处理SAGA */
function* handleSaga(action: any) {
  const { payload, request, type } = action;
  const { next, error, url, reducer } = request;
  try {
    let storeageURL = localStorage.getItem("URL");
    setTimeout(() => {
      storeageURL = "";
      // localStorage.removeItem("URL");
    }, 1000);
    /**1秒内不再请求相同的接口 */
    if (storeageURL === url) {
      // return;
    }
    const response = yield call(Api, url, payload);
    /**处理状态 */
    // handleStatus(response, next, error, redirect);
    if (!response) {
      if (typeof error === "function") {
        error(response);
      }
      return message.error("请求出错");
    }
    if (response && response.code === 200) {
      /**返回成功走下一步 */
      if (typeof next === "function") {
        next(response);
      }
    }
    if (
      (response.code === -1002 ||
        response.code === -1003 ||
        response.code === -1006) &&
      typeof redirect === "function"
    ) {
      /**清空登录KEY */
      localStorage.removeItem(KEY_TOKEN);
      /**跳转页面 */
      redirect("/", response.message);
      return;
    }
    if (response.code !== 200) {
      /**执行错误返回 */
      if (typeof error === "function") {
        error(response);
      }
      message.destroy();
      return message.error(response.message);
    }
    localStorage.setItem("URL", url);
    //存入Reducer
    if (reducer) {
      yield put({ type: `${type}_REDUCER`, payload: response.data, reducer });
    }
  } catch (error) {
    yield put({ type: "REQUEST_FAILED", error: error });
  }
}
/**
 * 订阅SAGA
 * @param actions
 */
export function* watchSaga(actions: any) {
  if (actions && Object.keys(actions).length > 0) {
    for (let i = 0; i < actions.length; i++) {
      yield takeLatest(actions[i], handleSaga);
    }
  } else {
    yield takeLatest("ACTION_FAILED", handleSaga);
  }
}
