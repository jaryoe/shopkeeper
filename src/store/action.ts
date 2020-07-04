import { BaseURL } from "../config/base";

/**
 * 公共获取数据Action
 * type: @string // type 触发action
 * payload: @object // 发送参数
 * method: @string // 默认POST 可选择GET, PUT 等
 * request{
 * url: @string //访问API的地址
 * next: @void //获取数据成功后处理callback
 * error: @void //获取数据失败后处理callback
 * reducer: @object {init: @object //初始化,  name: @string //store树中的名称} //是否需求储存到reducer
 * }
 *
 */
export function fetchData(
  params: {
    type: string;
    payload: any;
    url: string;
    method?: string;
    reducer?: any;
  },
  next?: (res: any) => void,
  error?: (res: any) => void
) {
  const { type, payload, url, method, reducer } = params;
  return {
    type,
    payload,
    request: {
      url: `${BaseURL}${url}`,
      method,
      reducer,
      // reducer: {
      //   init: {
      //     user: '111',
      //   },
      //   name: 'loginStore',
      // },
      next: (res: any) => {
        if (typeof next === "function") {
          next(res);
        }
      },
      error: (res: any) => {
        if (typeof error === "function") {
          error(res);
        }
      },
    },
  };
}

/**
 * 公共处理数据Action
 * type: @string // type 触发action
 * payload: @object // 发送参数
 * method: @string // 默认POST 可选择GET, PUT 等
 * request{
 * url: @string //访问API的地址
 * next: @void //获取数据成功后处理callback
 * error: @void //获取数据失败后处理callback
 * }
 *
 */
export function handleData(
  params: {
    type: string;
    payload: any;
    url: string;
    method?: string;
  },
  next?: (res: any) => void,
  error?: (res: any) => void
) {
  const { type, payload, method, url } = params;
  return {
    type,
    payload,
    request: {
      url: `${BaseURL}${url}`,
      method,
      next: (res: any) => {
        if (typeof next === "function") {
          next(res);
        }
      },
      error: (res: any) => {
        if (typeof error === "function") {
          error(res);
        }
      },
    },
  };
}
